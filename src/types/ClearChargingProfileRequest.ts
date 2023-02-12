/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Charging_ Profile. Charging_ Profile_ Purpose. Charging_ Profile_ Purpose_ Code
 * urn:x-oca:ocpp:uid:1:569231
 * Specifies to purpose of the charging profiles that will be cleared, if they meet the other criteria in the request.
 *
 */
export type ChargingProfilePurposeEnumType =
  | "ChargingStationExternalConstraints"
  | "ChargingStationMaxProfile"
  | "TxDefaultProfile"
  | "TxProfile";

export interface UrnOCPPCp220203ClearChargingProfileRequest {
  customData?: CustomDataType;
  /**
   * The Id of the charging profile to clear.
   *
   */
  chargingProfileId?: number;
  chargingProfileCriteria?: ClearChargingProfileType;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
/**
 * Charging_ Profile
 * urn:x-oca:ocpp:uid:2:233255
 * A ChargingProfile consists of a ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 *
 */
export interface ClearChargingProfileType {
  customData?: CustomDataType;
  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * Specifies the id of the EVSE for which to clear charging profiles. An evseId of zero (0) specifies the charging profile for the overall Charging Station. Absence of this parameter means the clearing applies to all charging profiles that match the other criteria in the request.
   *
   *
   */
  evseId?: number;
  chargingProfilePurpose?: ChargingProfilePurposeEnumType;
  /**
   * Charging_ Profile. Stack_ Level. Counter
   * urn:x-oca:ocpp:uid:1:569230
   * Specifies the stackLevel for which charging profiles will be cleared, if they meet the other criteria in the request.
   *
   */
  stackLevel?: number;
}
