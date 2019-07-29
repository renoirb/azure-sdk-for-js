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
import * as Mappers from "../models/delegationSettingsMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a DelegationSettings. */
export class DelegationSettings {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a DelegationSettings.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the entity state (Etag) version of the DelegationSettings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.DelegationSettingsGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.DelegationSettingsGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.DelegationSettingsGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.DelegationSettingsGetEntityTagResponse>;
  }

  /**
   * Get Delegation Settings for the Portal.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.DelegationSettingsGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.DelegationSettingsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, callback: coreHttp.ServiceCallback<Models.PortalDelegationSettings>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.PortalDelegationSettings>): void;
  get(resourceGroupName: string, serviceName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.PortalDelegationSettings>, callback?: coreHttp.ServiceCallback<Models.PortalDelegationSettings>): Promise<Models.DelegationSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DelegationSettingsGetResponse>;
  }

  /**
   * Update Delegation settings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Update Delegation settings.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.PortalDelegationSettings, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Update Delegation settings.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.PortalDelegationSettings, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Update Delegation settings.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.PortalDelegationSettings, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  update(resourceGroupName: string, serviceName: string, parameters: Models.PortalDelegationSettings, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Create or Update Delegation settings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Create or update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.DelegationSettingsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PortalDelegationSettings, options?: Models.DelegationSettingsCreateOrUpdateOptionalParams): Promise<Models.DelegationSettingsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Create or update parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PortalDelegationSettings, callback: coreHttp.ServiceCallback<Models.PortalDelegationSettings>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Create or update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PortalDelegationSettings, options: Models.DelegationSettingsCreateOrUpdateOptionalParams, callback: coreHttp.ServiceCallback<Models.PortalDelegationSettings>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PortalDelegationSettings, options?: Models.DelegationSettingsCreateOrUpdateOptionalParams | coreHttp.ServiceCallback<Models.PortalDelegationSettings>, callback?: coreHttp.ServiceCallback<Models.PortalDelegationSettings>): Promise<Models.DelegationSettingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DelegationSettingsCreateOrUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getEntityTagOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/delegation",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
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
      headersMapper: Mappers.DelegationSettingsGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/delegation",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
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
      bodyMapper: Mappers.PortalDelegationSettings,
      headersMapper: Mappers.DelegationSettingsGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/delegation",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
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
      ...Mappers.PortalDelegationSettings,
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

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/delegation",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
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
      ...Mappers.PortalDelegationSettings,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PortalDelegationSettings
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
