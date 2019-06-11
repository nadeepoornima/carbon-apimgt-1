package org.wso2.carbon.apimgt.rest.api.admin;

import org.wso2.carbon.apimgt.api.APIManagementException;
import org.wso2.carbon.apimgt.rest.api.admin.*;
import org.wso2.carbon.apimgt.rest.api.admin.dto.*;

import org.wso2.carbon.apimgt.rest.api.admin.dto.ErrorDTO;
import org.wso2.carbon.apimgt.rest.api.admin.dto.EmailDTO;

import java.sql.SQLException;
import java.util.List;

import java.io.InputStream;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;

import javax.ws.rs.core.Response;

public abstract class HoneyPotApiService {
    public abstract Response honeyPotAddEmailPost(EmailDTO body) throws APIManagementException, SQLException;
    public abstract Response honeyPotDeleteAlertDataDelete(String messageID) throws APIManagementException, SQLException;
    public abstract Response honeyPotEmailDelete(String uuid) throws APIManagementException, SQLException;
    public abstract Response honeyPotGetAlertDataGet() throws APIManagementException;
    public abstract Response honeyPotGetEmailListGet(String tenantDomain) throws APIManagementException;
}

