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
import * as Mappers from "../models/apiIssueMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ApiIssue. */
export class ApiIssue {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ApiIssue.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all issues associated with the specified API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.ApiIssueListByServiceOptionalParams): Promise<Models.ApiIssueListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, apiId: string, callback: coreHttp.ServiceCallback<Models.IssueCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, apiId: string, options: Models.ApiIssueListByServiceOptionalParams, callback: coreHttp.ServiceCallback<Models.IssueCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.ApiIssueListByServiceOptionalParams | coreHttp.ServiceCallback<Models.IssueCollection>, callback?: coreHttp.ServiceCallback<Models.IssueCollection>): Promise<Models.ApiIssueListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.ApiIssueListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the Issue for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options?: coreHttp.RequestOptionsBase): Promise<Models.ApiIssueGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ApiIssueGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.ApiIssueGetEntityTagResponse>;
  }

  /**
   * Gets the details of the Issue for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options?: Models.ApiIssueGetOptionalParams): Promise<Models.ApiIssueGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, callback: coreHttp.ServiceCallback<Models.IssueContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options: Models.ApiIssueGetOptionalParams, callback: coreHttp.ServiceCallback<Models.IssueContract>): void;
  get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options?: Models.ApiIssueGetOptionalParams | coreHttp.ServiceCallback<Models.IssueContract>, callback?: coreHttp.ServiceCallback<Models.IssueContract>): Promise<Models.ApiIssueGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApiIssueGetResponse>;
  }

  /**
   * Creates a new Issue for an API or updates an existing one.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param parameters Create parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, parameters: Models.IssueContract, options?: Models.ApiIssueCreateOrUpdateOptionalParams): Promise<Models.ApiIssueCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param parameters Create parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, parameters: Models.IssueContract, callback: coreHttp.ServiceCallback<Models.IssueContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param parameters Create parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, parameters: Models.IssueContract, options: Models.ApiIssueCreateOrUpdateOptionalParams, callback: coreHttp.ServiceCallback<Models.IssueContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, parameters: Models.IssueContract, options?: Models.ApiIssueCreateOrUpdateOptionalParams | coreHttp.ServiceCallback<Models.IssueContract>, callback?: coreHttp.ServiceCallback<Models.IssueContract>): Promise<Models.ApiIssueCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ApiIssueCreateOrUpdateResponse>;
  }

  /**
   * Updates an existing issue for an API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, parameters: Models.IssueUpdateContract, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, parameters: Models.IssueUpdateContract, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, parameters: Models.IssueUpdateContract, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  update(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, parameters: Models.IssueUpdateContract, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Deletes the specified Issue from an API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists all issues associated with the specified API.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.ApiIssueListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.IssueCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.IssueCollection>): void;
  listByServiceNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.IssueCollection>, callback?: coreHttp.ServiceCallback<Models.IssueCollection>): Promise<Models.ApiIssueListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.ApiIssueListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listByServiceOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.expandCommentsAttachments,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IssueCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
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
      headersMapper: Mappers.ApiIssueGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expandCommentsAttachments,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IssueContract,
      headersMapper: Mappers.ApiIssueGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
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
      ...Mappers.IssueContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IssueContract,
      headersMapper: Mappers.ApiIssueCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.IssueContract,
      headersMapper: Mappers.ApiIssueCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
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
      ...Mappers.IssueUpdateContract,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
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

const listByServiceNextOperationSpec: coreHttp.OperationSpec = {
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
      bodyMapper: Mappers.IssueCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
