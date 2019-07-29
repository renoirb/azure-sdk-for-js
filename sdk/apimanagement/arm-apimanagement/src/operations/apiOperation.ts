/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/apiOperationMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ApiOperation. */
export class ApiOperation {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ApiOperation.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of the operations for the specified API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiOperationListByApiResponse>
   */
  listByApi(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.ApiOperationListByApiOptionalParams): Promise<Models.ApiOperationListByApiResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param callback The callback
   */
  listByApi(resourceGroupName: string, serviceName: string, apiId: string, callback: coreHttp.ServiceCallback<Models.OperationCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByApi(resourceGroupName: string, serviceName: string, apiId: string, options: Models.ApiOperationListByApiOptionalParams, callback: coreHttp.ServiceCallback<Models.OperationCollection>): void;
  listByApi(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.ApiOperationListByApiOptionalParams | coreHttp.ServiceCallback<Models.OperationCollection>, callback?: coreHttp.ServiceCallback<Models.OperationCollection>): Promise<Models.ApiOperationListByApiResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        options
      },
      listByApiOperationSpec,
      callback) as Promise<Models.ApiOperationListByApiResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the API operation specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiOperationGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, options?: coreHttp.RequestOptionsBase): Promise<Models.ApiOperationGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ApiOperationGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.ApiOperationGetEntityTagResponse>;
  }

  /**
   * Gets the details of the API Operation specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiOperationGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, options?: coreHttp.RequestOptionsBase): Promise<Models.ApiOperationGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, callback: coreHttp.ServiceCallback<Models.OperationContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.OperationContract>): void;
  get(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.OperationContract>, callback?: coreHttp.ServiceCallback<Models.OperationContract>): Promise<Models.ApiOperationGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApiOperationGetResponse>;
  }

  /**
   * Creates a new operation in the API or updates an existing one.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param parameters Create parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiOperationCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, parameters: Models.OperationContract, options?: Models.ApiOperationCreateOrUpdateOptionalParams): Promise<Models.ApiOperationCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param parameters Create parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, parameters: Models.OperationContract, callback: coreHttp.ServiceCallback<Models.OperationContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param parameters Create parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, parameters: Models.OperationContract, options: Models.ApiOperationCreateOrUpdateOptionalParams, callback: coreHttp.ServiceCallback<Models.OperationContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, parameters: Models.OperationContract, options?: Models.ApiOperationCreateOrUpdateOptionalParams | coreHttp.ServiceCallback<Models.OperationContract>, callback?: coreHttp.ServiceCallback<Models.OperationContract>): Promise<Models.ApiOperationCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ApiOperationCreateOrUpdateResponse>;
  }

  /**
   * Updates the details of the operation in the API specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param parameters API Operation Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, parameters: Models.OperationUpdateContract, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param parameters API Operation Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, parameters: Models.OperationUpdateContract, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param parameters API Operation Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, parameters: Models.OperationUpdateContract, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  update(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, parameters: Models.OperationUpdateContract, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Deletes the specified operation in the API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service
   * instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API
   * Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, operationId: string, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of the operations for the specified API.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiOperationListByApiNextResponse>
   */
  listByApiNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.ApiOperationListByApiNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByApiNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.OperationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByApiNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.OperationCollection>): void;
  listByApiNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.OperationCollection>, callback?: coreHttp.ServiceCallback<Models.OperationCollection>): Promise<Models.ApiOperationListByApiNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByApiNextOperationSpec,
      callback) as Promise<Models.ApiOperationListByApiNextResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listByApiOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.tags,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.ApiOperationGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationContract,
      headersMapper: Mappers.ApiOperationGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.OperationContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationContract,
      headersMapper: Mappers.ApiOperationCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.OperationContract,
      headersMapper: Mappers.ApiOperationCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.OperationUpdateContract,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId0,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByApiNextOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
