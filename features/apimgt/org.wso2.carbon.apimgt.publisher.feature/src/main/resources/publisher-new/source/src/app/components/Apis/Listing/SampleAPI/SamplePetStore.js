const getSwagger = policyLevel => ({
    paths: {
        '/order': {
            post: {
                'x-auth-type': 'Application & Application User',
                'x-throttling-tier': policyLevel,
                description: 'Create a new Order',
                parameters: [
                    {
                        schema: { $ref: '#/definitions/Order' },
                        description: 'Order object that needs to be added',
                        name: 'body',
                        required: true,
                        in: 'body',
                    },
                ],
                responses: {
                    201: {
                        headers: {
                            Location: {
                                description: 'The URL of the newly created resource.',
                                type: 'string',
                            },
                            'Content-Type': {
                                description: 'The content type of the body.',
                                type: 'string',
                            },
                        },
                        schema: { $ref: '#/definitions/Order' },
                        description:
                            'Created. Successful response with the newly created object as entity in' +
                            'the body. Location header contains URL of newly created entity.',
                    },
                    400: {
                        schema: { $ref: '#/definitions/Error' },
                        description: 'Bad Request. Invalid request or validation error.',
                    },
                    415: {
                        schema: { $ref: '#/definitions/Error' },
                        description: 'Unsupported Media Type. The entity of the request was in a not supported format.',
                    },
                },
            },
        },
        '/menu': {
            get: {
                'x-auth-type': 'Application & Application User',
                'x-throttling-tier': policyLevel,
                description: 'Return a list of available menu items',
                parameters: [],
                responses: {
                    200: {
                        headers: {},
                        schema: {
                            items: { $ref: '#/definitions/MenuItem' },
                            type: 'array',
                        },
                        description: 'OK. List of APIs is returned.',
                    },
                    304: {
                        description:
                            'Not Modified. Empty body because the client has already the latest' +
                            ' version of the requested resource.',
                    },
                    406: {
                        schema: { $ref: '#/definitions/Error' },
                        description: 'Not Acceptable. The requested media type is not supported',
                    },
                },
            },
        },
        '/order/{orderId}': {
            put: {
                'x-auth-type': 'Application & Application User',
                'x-throttling-tier': policyLevel,
                description: 'Update an existing Order',
                parameters: [
                    {
                        description: 'Order Id',
                        name: 'orderId',
                        format: 'string',
                        type: 'string',
                        required: true,
                        in: 'path',
                    },
                    {
                        schema: { $ref: '#/definitions/Order' },
                        description: 'Order object that needs to be added',
                        name: 'body',
                        required: true,
                        in: 'body',
                    },
                ],
                responses: {
                    200: {
                        headers: {
                            Location: {
                                description: 'The URL of the newly created resource.',
                                type: 'string',
                            },
                            'Content-Type': {
                                description: 'The content type of the body.',
                                type: 'string',
                            },
                        },
                        schema: { $ref: '#/definitions/Order' },
                        description: 'OK. Successful response with updated Order',
                    },
                    400: {
                        schema: { $ref: '#/definitions/Error' },
                        description: 'Bad Request. Invalid request or validation error',
                    },
                    404: {
                        schema: { $ref: '#/definitions/Error' },
                        description: 'Not Found. The resource to be updated does not exist.',
                    },
                    412: {
                        schema: { $ref: '#/definitions/Error' },
                        description:
                            'Precondition Failed. The request has not been performed because one ' +
                            'of the preconditions is not met.',
                    },
                },
            },
            get: {
                'x-auth-type': 'Application & Application User',
                'x-throttling-tier': policyLevel,
                description: 'Get details of an Order',
                parameters: [
                    {
                        description: 'Order Id',
                        name: 'orderId',
                        format: 'string',
                        type: 'string',
                        required: true,
                        in: 'path',
                    },
                ],
                responses: {
                    200: {
                        schema: { $ref: '#/definitions/Order' },
                        headers: {},
                        description: 'OK Requested Order will be returned',
                    },
                    304: {
                        description:
                            'Not Modified. Empty body because the client has already the latest' +
                            ' version of the requested resource.',
                    },
                    404: {
                        schema: { $ref: '#/definitions/Error' },
                        description: 'Not Found. Requested API does not exist.',
                    },
                    406: {
                        schema: { $ref: '#/definitions/Error' },
                        description: 'Not Acceptable. The requested media type is not supported',
                    },
                },
            },
            delete: {
                'x-auth-type': 'Application & Application User',
                'x-throttling-tier': policyLevel,
                description: 'Delete an existing Order',
                parameters: [
                    {
                        description: 'Order Id',
                        name: 'orderId',
                        format: 'string',
                        type: 'string',
                        required: true,
                        in: 'path',
                    },
                ],
                responses: {
                    200: {
                        description: 'OK. Resource successfully deleted.',
                    },
                    404: {
                        schema: { $ref: '#/definitions/Error' },
                        description: 'Not Found. Resource to be deleted does not exist.',
                    },
                    412: {
                        schema: { $ref: '#/definitions/Error' },
                        description:
                            'Precondition Failed. The request has not been performed because one of the' +
                            ' preconditions is not met.',
                    },
                },
            },
        },
    },
    schemes: ['https'],
    produces: ['application/json'],
    swagger: '2.0',
    definitions: {
        ErrorListItem: {
            title: 'Description of individual errors that may have occored during a request.',
            properties: {
                message: {
                    description: 'Description about individual errors occored',
                    type: 'string',
                },
                code: { format: 'int64', type: 'integer' },
            },
            required: ['code', 'message'],
        },
        MenuItem: {
            title: 'Pizza menu Item',
            properties: {
                price: { type: 'string' },
                description: { type: 'string' },
                name: { type: 'string' },
                image: { type: 'string' },
            },
            required: ['name'],
        },
        Order: {
            title: 'Pizza Order',
            properties: {
                customerName: { type: 'string' },
                delivered: { type: 'boolean' },
                address: { type: 'string' },
                pizzaType: { type: 'string' },
                creditCardNumber: { type: 'string' },
                quantity: { type: 'number' },
                orderId: { type: 'string' },
            },
            required: ['orderId'],
        },
        Error: {
            title: 'Error object returned with 4XX HTTP status',
            properties: {
                message: {
                    description: 'Error message.',
                    type: 'string',
                },
                error: {
                    items: { $ref: '#/definitions/ErrorListItem' },
                    description:
                        'If there are more than one error list them out. Ex. list out validation errors by each field.',
                    type: 'array',
                },
                description: {
                    description: 'A detail description about the error message.',
                    type: 'string',
                },
                code: { format: 'int64', type: 'integer' },
                moreInfo: {
                    description: 'Preferably an url with more details about the error.',
                    type: 'string',
                },
            },
            required: ['code', 'message'],
        },
    },
    consumes: ['application/json'],
    info: {
        title: 'PizzaShackAPI',
        description: 'This is a RESTFul API for Pizza Shack online pizza delivery store.\n',
        license: {
            name: 'Apache 2.0',
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
        contact: {
            email: 'architecture@pizzashack.com',
            name: 'John Doe',
            url: 'http://www.pizzashack.com',
        },
        version: '1.0.0',
    },
});

export default getSwagger;
