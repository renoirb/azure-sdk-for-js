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
import * as Mappers from "../models/emailTemplateMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a EmailTemplate. */
export class EmailTemplate {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a EmailTemplate.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of properties defined within a service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.EmailTemplateListByServiceOptionalParams): Promise<Models.EmailTemplateListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: coreHttp.ServiceCallback<Models.EmailTemplateCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.EmailTemplateListByServiceOptionalParams, callback: coreHttp.ServiceCallback<Models.EmailTemplateCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.EmailTemplateListByServiceOptionalParams | coreHttp.ServiceCallback<Models.EmailTemplateCollection>, callback?: coreHttp.ServiceCallback<Models.EmailTemplateCollection>): Promise<Models.EmailTemplateListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.EmailTemplateListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the email template specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options?: coreHttp.RequestOptionsBase): Promise<Models.EmailTemplateGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.EmailTemplateGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.EmailTemplateGetEntityTagResponse>;
  }

  /**
   * Gets the details of the email template specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options?: coreHttp.RequestOptionsBase): Promise<Models.EmailTemplateGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, callback: coreHttp.ServiceCallback<Models.EmailTemplateContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.EmailTemplateContract>): void;
  get(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.EmailTemplateContract>, callback?: coreHttp.ServiceCallback<Models.EmailTemplateContract>): Promise<Models.EmailTemplateGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EmailTemplateGetResponse>;
  }

  /**
   * Updates an Email Template.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Email Template update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, options?: Models.EmailTemplateCreateOrUpdateOptionalParams): Promise<Models.EmailTemplateCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Email Template update parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, callback: coreHttp.ServiceCallback<Models.EmailTemplateContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Email Template update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, options: Models.EmailTemplateCreateOrUpdateOptionalParams, callback: coreHttp.ServiceCallback<Models.EmailTemplateContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, options?: Models.EmailTemplateCreateOrUpdateOptionalParams | coreHttp.ServiceCallback<Models.EmailTemplateContract>, callback?: coreHttp.ServiceCallback<Models.EmailTemplateContract>): Promise<Models.EmailTemplateCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.EmailTemplateCreateOrUpdateResponse>;
  }

  /**
   * Updates the specific Email Template.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  update(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  update(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, parameters: Models.EmailTemplateUpdateParameters, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Reset the Email Template to default template provided by the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier. Possible values include:
   * 'applicationApprovedNotificationMessage', 'accountClosedDeveloper',
   * 'quotaLimitApproachingDeveloperNotificationMessage', 'newDeveloperNotificationMessage',
   * 'emailChangeIdentityDefault', 'inviteUserNotificationMessage', 'newCommentNotificationMessage',
   * 'confirmSignUpIdentityDefault', 'newIssueNotificationMessage',
   * 'purchaseDeveloperNotificationMessage', 'passwordResetIdentityDefault',
   * 'passwordResetByAdminNotificationMessage', 'rejectDeveloperNotificationMessage',
   * 'requestDeveloperNotificationMessage'
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, templateName: Models.TemplateName, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of properties defined within a service instance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EmailTemplateListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.EmailTemplateListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.EmailTemplateCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.EmailTemplateCollection>): void;
  listByServiceNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.EmailTemplateCollection>, callback?: coreHttp.ServiceCallback<Models.EmailTemplateCollection>): Promise<Models.EmailTemplateListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.EmailTemplateListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listByServiceOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
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
      headersMapper: Mappers.EmailTemplateGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
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
      bodyMapper: Mappers.EmailTemplateContract,
      headersMapper: Mappers.EmailTemplateGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
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
      ...Mappers.EmailTemplateUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateContract
    },
    201: {
      bodyMapper: Mappers.EmailTemplateContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
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
      ...Mappers.EmailTemplateUpdateParameters,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.templateName,
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
      bodyMapper: Mappers.EmailTemplateCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
