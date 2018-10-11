/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { PowerBIEmbeddedManagementClientContext } from "./powerBIEmbeddedManagementClientContext";


class PowerBIEmbeddedManagementClient extends PowerBIEmbeddedManagementClientContext {
  // Operation groups
  workspaceCollections: operations.WorkspaceCollections;
  workspaces: operations.Workspaces;

  /**
   * Initializes a new instance of the PowerBIEmbeddedManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify a Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.PowerBIEmbeddedManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.workspaceCollections = new operations.WorkspaceCollections(this);
    this.workspaces = new operations.Workspaces(this);
  }

  /**
   * Indicates which operations can be performed by the Power BI Resource Provider.
   * @param [options] The optional parameters
   * @returns Promise<Models.GetAvailableOperationsResponse>
   */
  getAvailableOperations(options?: msRest.RequestOptionsBase): Promise<Models.GetAvailableOperationsResponse>;
  /**
   * @param callback The callback
   */
  getAvailableOperations(callback: msRest.ServiceCallback<Models.OperationList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAvailableOperations(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationList>): void;
  getAvailableOperations(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationList>): Promise<Models.GetAvailableOperationsResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getAvailableOperationsOperationSpec,
      callback) as Promise<Models.GetAvailableOperationsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAvailableOperationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.PowerBI/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  PowerBIEmbeddedManagementClient,
  PowerBIEmbeddedManagementClientContext,
  Models as PowerBIEmbeddedManagementModels,
  Mappers as PowerBIEmbeddedManagementMappers
};
export * from "./operations";