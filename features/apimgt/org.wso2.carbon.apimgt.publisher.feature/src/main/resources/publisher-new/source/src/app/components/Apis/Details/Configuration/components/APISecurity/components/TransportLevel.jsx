/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FormattedMessage, injectIntl } from 'react-intl';
import Certificates from 'AppComponents/Apis/Details/Endpoints/GeneralConfiguration/Certificates';
import { isRestricted } from 'AppData/AuthManager';
import APIContext from 'AppComponents/Apis/Details/components/ApiContext';
import API from 'AppData/api';
import Alert from 'AppComponents/Shared/Alert';

import {
    API_SECURITY_MUTUAL_SSL,
    API_SECURITY_MUTUAL_SSL_MANDATORY,
    DEFAULT_API_SECURITY_OAUTH2,
    API_SECURITY_BASIC_AUTH,
} from '../APISecurity';

/**
 *
 *
 * @export
 * @param {*} props
 * @returns
 */
function TransportLevel(props) {
    const {
        haveMultiLevelSecurity, securityScheme, configDispatcher, intl, id,
    } = props;
    const isMutualSSLEnabled = securityScheme.includes(API_SECURITY_MUTUAL_SSL);
    const { api } = useContext(APIContext);
    const [clientCertificates, setClientCertificates] = useState([]);

    /**
     * Method to upload the certificate content by calling the rest api.
     *
     * @param {string} certificate The certificate needs to be associated with the API
     * @param {string} policy The tier to be used for the certificate.
     * @param {string} alias The alias of the certificate to be deleted.
     * */
    const saveClientCertificate = (certificate, policy, alias) => {
        API.addClientCertificate(id, certificate, policy, alias).then((resp) => {
            if (resp.status === 201) {
                Alert.info(intl.formatMessage({
                    id: 'Apis.Details.Configuration.components.APISecurity.TranportLevel.certificate.add.success',
                    defaultMessage: 'Certificate added successfully',
                }));
                const tmpCertificates = [...clientCertificates];
                tmpCertificates.push({
                    apiId: resp.obj.apiId,
                    alias: resp.obj.alias,
                    tier: resp.obj.tier,
                });
                setClientCertificates(tmpCertificates);
            }
        }).catch((error) => {
            if (error.response) {
                Alert.error(error.response.body.description);
            } else {
                Alert.error(intl.formatMessage({
                    id: 'Apis.Details.Configuration.components.APISecurity.TranportLevel.certificate.alias.error',
                    defaultMessage: 'Something went wrong while adding the API certificate',
                }));
            }
        });
    };

    /**
     * Method to delete the selected certificate.
     *
     * @param {string} alias The alias of the certificate to be deleted.
     * */
    const deleteClientCertificate = (alias) => {
        API.deleteClientCertificate(alias, id).then((resp) => {
            setClientCertificates(() => {
                if (resp.status === 200) {
                    return clientCertificates.filter((cert) => {
                        return cert.alias !== alias;
                    });
                } else {
                    return -1;
                }
            });
            Alert.info(intl.formatMessage({
                id: 'Apis.Details.Configuration.components.APISecurity.TranportLevel.certificate.delete.success',
                defaultMessage: 'Certificate Deleted Successfully',
            }));
        }).catch((error) => {
            if (error.response) {
                Alert.error(error.response.body.description);
            } else {
                Alert.info(intl.formatMessage({
                    id: 'Apis.Details.Configuration.components.APISecurity.TranportLevel.certificate.delete.error',
                    defaultMessage: 'Error while deleting certificate',
                }));
            }
        });
    };

    // Get the client certificates from backend.
    useEffect(() => {
        API.getAllClientCertificates(id).then((resp) => {
            const { certificates } = resp.obj;
            setClientCertificates(certificates);
        }).catch((err) => {
            console.error(err);
            setClientCertificates([]);
        });
    }, []);

    let mandatoryValue = 'optional';
    // If not mutual ssl security is selected, no mandatory values should be pre-selected
    if (!isMutualSSLEnabled) {
        mandatoryValue = 'null';
    } else if (
        !(securityScheme.includes(DEFAULT_API_SECURITY_OAUTH2) || securityScheme.includes(API_SECURITY_BASIC_AUTH))
    ) {
        mandatoryValue = API_SECURITY_MUTUAL_SSL_MANDATORY;
    } else if (securityScheme.includes(API_SECURITY_MUTUAL_SSL_MANDATORY)) {
        mandatoryValue = API_SECURITY_MUTUAL_SSL_MANDATORY;
    }
    return (
        <React.Fragment>
            <Grid item>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>
                        <FormattedMessage
                            id='Apis.Details.Configuration.Configuration.APISecurity.ssl'
                            defaultMessage='Transport Level (TLS)'
                        />
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    disabled={isRestricted(['apim:api_create'], api)}
                                    checked={isMutualSSLEnabled}
                                    onChange={({ target: { checked, value } }) => configDispatcher({
                                        action: 'securityScheme',
                                        event: { checked, value },
                                    })
                                    }
                                    value={API_SECURITY_MUTUAL_SSL}
                                />
                            )}
                            label='Mutual SSL'
                        />
                    </FormGroup>
                </FormControl>
                <Grid item>
                    <FormControl component='fieldset'>
                        <RadioGroup
                            aria-label='HTTP security SSL mandatory selection'
                            name={API_SECURITY_MUTUAL_SSL_MANDATORY}
                            value={mandatoryValue}
                            onChange={({ target: { name, value } }) => configDispatcher({
                                action: 'securityScheme',
                                event: { name, value },
                            })
                            }
                            row
                        >
                            <FormControlLabel
                                value={API_SECURITY_MUTUAL_SSL_MANDATORY}
                                control={<Radio disabled={!haveMultiLevelSecurity} color='default' />}
                                label='Mandatory'
                                labelPlacement='end'
                            />
                            <FormControlLabel
                                value='optional'
                                control={<Radio disabled={!haveMultiLevelSecurity} color='default' />}
                                label='Optional'
                                labelPlacement='end'
                            />
                        </RadioGroup>
                        <FormHelperText>
                            <FormattedMessage
                                id='Apis.Details.Configuration.components.APISecurity.components.TransportLevel'
                                defaultMessage='Choose whether Transport level security is mandatory or optional'
                            />
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    {isMutualSSLEnabled && (
                        // TODO:
                        // This is half baked!!!
                        // Refactor the Certificate component to share its capabilities in here and endpoints page ~tmkb
                        <Certificates
                            isMutualSSLEnabled={isMutualSSLEnabled}
                            certificates={clientCertificates}
                            uploadCertificate={saveClientCertificate}
                            deleteCertificate={deleteClientCertificate}
                            apiId={id}
                        />
                    )}

                </Grid>
            </Grid>
        </React.Fragment>
    );
}

TransportLevel.propTypes = {
    configDispatcher: PropTypes.func.isRequired,
    haveMultiLevelSecurity: PropTypes.bool.isRequired,
    securityScheme: PropTypes.arrayOf(PropTypes.string).isRequired,
    intl: PropTypes.shape({}).isRequired,
    id: PropTypes.string.isRequired,
};

export default injectIntl((TransportLevel));
