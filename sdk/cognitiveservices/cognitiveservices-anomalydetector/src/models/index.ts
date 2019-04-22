/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */


import * as msRest from "@azure/ms-rest-js";

/**
 * Error information returned by the API.
 */
export interface APIError {
  /**
   * The error code.
   */
  code?: any;
  /**
   * A message explaining the error reported by the service.
   */
  message?: string;
}

/**
 * An interface representing Point.
 */
export interface Point {
  /**
   * Timestamp of a data point (ISO8601 format).
   */
  timestamp: Date;
  /**
   * The measurement of that point, should be float.
   */
  value: number;
}

/**
 * An interface representing Request.
 */
export interface Request {
  /**
   * Time series data points. Points should be sorted by timestamp in ascending order to match the
   * anomaly detection result. If the data is not sorted correctly or there is duplicated
   * timestamp, the API will not work. In such case, an error message will be returned.
   */
  series: Point[];
  /**
   * Can only be one of yearly, monthly, weekly, daily, hourly or minutely. Granularity is used for
   * verify whether input series is valid. Possible values include: 'yearly', 'monthly', 'weekly',
   * 'daily', 'hourly', 'minutely'
   */
  granularity: Granularity;
  /**
   * Custom Interval is used to set non-standard time interval, for example, if the series is 5
   * minutes, request can be set as {"granularity":"minutely", "customInterval":5}.
   */
  customInterval?: number;
  /**
   * Optional argument, periodic value of a time series. If the value is null or does not present,
   * the API will determine the period automatically.
   */
  period?: number;
  /**
   * Optional argument, advanced model parameter, max anomaly ratio in a time series.
   */
  maxAnomalyRatio?: number;
  /**
   * Optional argument, advanced model parameter, between 0-99, the lower the value is, the larger
   * the margin value will be which means less anomalies will be accepted.
   */
  sensitivity?: number;
}

/**
 * An interface representing EntireDetectResponse.
 */
export interface EntireDetectResponse {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been found.
   */
  period: number;
  /**
   * ExpectedValues contain expected value for each input point. The index of the array is
   * consistent with the input series.
   */
  expectedValues: number[];
  /**
   * UpperMargins contain upper margin of each input point. UpperMargin is used to calculate
   * upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin. Anomalies in
   * response can be filtered by upperBoundary and lowerBoundary. By adjusting marginScale value,
   * less significant anomalies can be filtered in client side. The index of the array is
   * consistent with the input series.
   */
  upperMargins: number[];
  /**
   * LowerMargins contain lower margin of each input point. LowerMargin is used to calculate
   * lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin. Points between
   * the boundary can be marked as normal ones in client side. The index of the array is consistent
   * with the input series.
   */
  lowerMargins: number[];
  /**
   * IsAnomaly contains anomaly properties for each input point. True means an anomaly either
   * negative or positive has been detected. The index of the array is consistent with the input
   * series.
   */
  isAnomaly: boolean[];
  /**
   * IsNegativeAnomaly contains anomaly status in negative direction for each input point. True
   * means a negative anomaly has been detected. A negative anomaly means the point is detected as
   * an anomaly and its real value is smaller than the expected one. The index of the array is
   * consistent with the input series.
   */
  isNegativeAnomaly: boolean[];
  /**
   * IsPositiveAnomaly contain anomaly status in positive direction for each input point. True
   * means a positive anomaly has been detected. A positive anomaly means the point is detected as
   * an anomaly and its real value is larger than the expected one. The index of the array is
   * consistent with the input series.
   */
  isPositiveAnomaly: boolean[];
}

/**
 * An interface representing LastDetectResponse.
 */
export interface LastDetectResponse {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been found.
   */
  period: number;
  /**
   * Suggested input series points needed for detecting the latest point.
   */
  suggestedWindow: number;
  /**
   * Expected value of the latest point.
   */
  expectedValue: number;
  /**
   * Upper margin of the latest point. UpperMargin is used to calculate upperBoundary, which equals
   * to expectedValue + (100 - marginScale)*upperMargin. If the value of latest point is between
   * upperBoundary and lowerBoundary, it should be treated as normal value. By adjusting
   * marginScale value, anomaly status of latest point can be changed.
   */
  upperMargin: number;
  /**
   * Lower margin of the latest point. LowerMargin is used to calculate lowerBoundary, which equals
   * to expectedValue - (100 - marginScale)*lowerMargin.
   */
  lowerMargin: number;
  /**
   * Anomaly status of the latest point, true means the latest point is an anomaly either in
   * negative direction or positive direction.
   */
  isAnomaly: boolean;
  /**
   * Anomaly status in negative direction of the latest point. True means the latest point is an
   * anomaly and its real value is smaller than the expected one.
   */
  isNegativeAnomaly: boolean;
  /**
   * Anomaly status in positive direction of the latest point. True means the latest point is an
   * anomaly and its real value is larger than the expected one.
   */
  isPositiveAnomaly: boolean;
}

/**
 * Defines values for Granularity.
 * Possible values include: 'yearly', 'monthly', 'weekly', 'daily', 'hourly', 'minutely'
 * @readonly
 * @enum {string}
 */
export type Granularity = 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'minutely';

/**
 * Contains response data for the entireDetect operation.
 */
export type EntireDetectResponse2 = EntireDetectResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EntireDetectResponse;
    };
};

/**
 * Contains response data for the lastDetect operation.
 */
export type LastDetectResponse2 = LastDetectResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LastDetectResponse;
    };
};
