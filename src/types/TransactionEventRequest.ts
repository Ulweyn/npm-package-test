/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This contains the type of this event.
 * The first TransactionEvent of a transaction SHALL contain: "Started" The last TransactionEvent of a transaction SHALL contain: "Ended" All others SHALL contain: "Updated"
 *
 */
export type TransactionEventEnumType = "Ended" | "Started" | "Updated";
/**
 * Sampled_ Value. Context. Reading_ Context_ Code
 * urn:x-oca:ocpp:uid:1:569261
 * Type of detail value: start, end or sample. Default = "Sample.Periodic"
 *
 */
export type ReadingContextEnumType =
  | "Interruption.Begin"
  | "Interruption.End"
  | "Other"
  | "Sample.Clock"
  | "Sample.Periodic"
  | "Transaction.Begin"
  | "Transaction.End"
  | "Trigger";
/**
 * Sampled_ Value. Measurand. Measurand_ Code
 * urn:x-oca:ocpp:uid:1:569263
 * Type of measurement. Default = "Energy.Active.Import.Register"
 *
 */
export type MeasurandEnumType =
  | "Current.Export"
  | "Current.Import"
  | "Current.Offered"
  | "Energy.Active.Export.Register"
  | "Energy.Active.Import.Register"
  | "Energy.Reactive.Export.Register"
  | "Energy.Reactive.Import.Register"
  | "Energy.Active.Export.Interval"
  | "Energy.Active.Import.Interval"
  | "Energy.Active.Net"
  | "Energy.Reactive.Export.Interval"
  | "Energy.Reactive.Import.Interval"
  | "Energy.Reactive.Net"
  | "Energy.Apparent.Net"
  | "Energy.Apparent.Import"
  | "Energy.Apparent.Export"
  | "Frequency"
  | "Power.Active.Export"
  | "Power.Active.Import"
  | "Power.Factor"
  | "Power.Offered"
  | "Power.Reactive.Export"
  | "Power.Reactive.Import"
  | "SoC"
  | "Voltage";
/**
 * Sampled_ Value. Phase. Phase_ Code
 * urn:x-oca:ocpp:uid:1:569264
 * Indicates how the measured value is to be interpreted. For instance between L1 and neutral (L1-N) Please note that not all values of phase are applicable to all Measurands. When phase is absent, the measured value is interpreted as an overall value.
 *
 */
export type PhaseEnumType = "L1" | "L2" | "L3" | "N" | "L1-N" | "L2-N" | "L3-N" | "L1-L2" | "L2-L3" | "L3-L1";
/**
 * Sampled_ Value. Location. Location_ Code
 * urn:x-oca:ocpp:uid:1:569265
 * Indicates where the measured value has been sampled. Default =  "Outlet"
 *
 *
 */
export type LocationEnumType = "Body" | "Cable" | "EV" | "Inlet" | "Outlet";
/**
 * Reason the Charging Station sends this message to the CSMS
 *
 */
export type TriggerReasonEnumType =
  | "Authorized"
  | "CablePluggedIn"
  | "ChargingRateChanged"
  | "ChargingStateChanged"
  | "Deauthorized"
  | "EnergyLimitReached"
  | "EVCommunicationLost"
  | "EVConnectTimeout"
  | "MeterValueClock"
  | "MeterValuePeriodic"
  | "TimeLimitReached"
  | "Trigger"
  | "UnlockCommand"
  | "StopAuthorized"
  | "EVDeparted"
  | "EVDetected"
  | "RemoteStop"
  | "RemoteStart"
  | "AbnormalCondition"
  | "SignedDataReceived"
  | "ResetCommand";
/**
 * Transaction. State. Transaction_ State_ Code
 * urn:x-oca:ocpp:uid:1:569419
 * Current charging state, is required when state
 * has changed.
 *
 */
export type ChargingStateEnumType = "Charging" | "EVConnected" | "SuspendedEV" | "SuspendedEVSE" | "Idle";
/**
 * Transaction. Stopped_ Reason. EOT_ Reason_ Code
 * urn:x-oca:ocpp:uid:1:569413
 * This contains the reason why the transaction was stopped. MAY only be omitted when Reason is "Local".
 *
 */
export type ReasonEnumType =
  | "DeAuthorized"
  | "EmergencyStop"
  | "EnergyLimitReached"
  | "EVDisconnected"
  | "GroundFault"
  | "ImmediateReset"
  | "Local"
  | "LocalOutOfCredit"
  | "MasterPass"
  | "Other"
  | "OvercurrentFault"
  | "PowerLoss"
  | "PowerQuality"
  | "Reboot"
  | "Remote"
  | "SOCLimitReached"
  | "StoppedByEV"
  | "TimeLimitReached"
  | "Timeout";
/**
 * Enumeration of possible idToken types.
 *
 */
export type IdTokenEnumType =
  | "Central"
  | "eMAID"
  | "ISO14443"
  | "ISO15693"
  | "KeyCode"
  | "Local"
  | "MacAddress"
  | "NoAuthorization";

export interface UrnOCPPCp220203TransactionEventRequest {
  customData?: CustomDataType;
  eventType: TransactionEventEnumType;
  /**
   * @minItems 1
   */
  meterValue?: [MeterValueType, ...MeterValueType[]];
  /**
   * The date and time at which this transaction event occurred.
   *
   */
  timestamp: string;
  triggerReason: TriggerReasonEnumType;
  /**
   * Incremental sequence number, helps with determining if all messages of a transaction have been received.
   *
   */
  seqNo: number;
  /**
   * Indication that this transaction event happened when the Charging Station was offline. Default = false, meaning: the event occurred when the Charging Station was online.
   *
   */
  offline?: boolean;
  /**
   * If the Charging Station is able to report the number of phases used, then it SHALL provide it. When omitted the CSMS may be able to determine the number of phases used via device management.
   *
   */
  numberOfPhasesUsed?: number;
  /**
   * The maximum current of the connected cable in Ampere (A).
   *
   */
  cableMaxCurrent?: number;
  /**
   * This contains the Id of the reservation that terminates as a result of this transaction.
   *
   */
  reservationId?: number;
  transactionInfo: TransactionType;
  evse?: EVSEType;
  idToken?: IdTokenType;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
/**
 * Meter_ Value
 * urn:x-oca:ocpp:uid:2:233265
 * Collection of one or more sampled values in MeterValuesRequest and TransactionEvent. All sampled values in a MeterValue are sampled at the same point in time.
 *
 */
export interface MeterValueType {
  customData?: CustomDataType;
  /**
   * @minItems 1
   */
  sampledValue: [SampledValueType, ...SampledValueType[]];
  /**
   * Meter_ Value. Timestamp. Date_ Time
   * urn:x-oca:ocpp:uid:1:569259
   * Timestamp for measured value(s).
   *
   */
  timestamp: string;
}
/**
 * Sampled_ Value
 * urn:x-oca:ocpp:uid:2:233266
 * Single sampled value in MeterValues. Each value can be accompanied by optional fields.
 *
 * To save on mobile data usage, default values of all of the optional fields are such that. The value without any additional fields will be interpreted, as a register reading of active import energy in Wh (Watt-hour) units.
 *
 */
export interface SampledValueType {
  customData?: CustomDataType;
  /**
   * Sampled_ Value. Value. Measure
   * urn:x-oca:ocpp:uid:1:569260
   * Indicates the measured value.
   *
   *
   */
  value: number;
  context?: ReadingContextEnumType;
  measurand?: MeasurandEnumType;
  phase?: PhaseEnumType;
  location?: LocationEnumType;
  signedMeterValue?: SignedMeterValueType;
  unitOfMeasure?: UnitOfMeasureType;
}
/**
 * Represent a signed version of the meter value.
 *
 */
export interface SignedMeterValueType {
  customData?: CustomDataType;
  /**
   * Base64 encoded, contains the signed data which might contain more then just the meter value. It can contain information like timestamps, reference to a customer etc.
   *
   */
  signedMeterData: string;
  /**
   * Method used to create the digital signature.
   *
   */
  signingMethod: string;
  /**
   * Method used to encode the meter values before applying the digital signature algorithm.
   *
   */
  encodingMethod: string;
  /**
   * Base64 encoded, sending depends on configuration variable _PublicKeyWithSignedMeterValue_.
   *
   */
  publicKey: string;
}
/**
 * Represents a UnitOfMeasure with a multiplier
 *
 */
export interface UnitOfMeasureType {
  customData?: CustomDataType;
  /**
   * Unit of the value. Default = "Wh" if the (default) measurand is an "Energy" type.
   * This field SHALL use a value from the list Standardized Units of Measurements in Part 2 Appendices.
   * If an applicable unit is available in that list, otherwise a "custom" unit might be used.
   *
   */
  unit?: string;
  /**
   * Multiplier, this value represents the exponent to base 10. I.e. multiplier 3 means 10 raised to the 3rd power. Default is 0.
   *
   */
  multiplier?: number;
}
/**
 * Transaction
 * urn:x-oca:ocpp:uid:2:233318
 *
 */
export interface TransactionType {
  customData?: CustomDataType;
  /**
   * This contains the Id of the transaction.
   *
   */
  transactionId: string;
  chargingState?: ChargingStateEnumType;
  /**
   * Transaction. Time_ Spent_ Charging. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569415
   * Contains the total time that energy flowed from EVSE to EV during the transaction (in seconds). Note that timeSpentCharging is smaller or equal to the duration of the transaction.
   *
   */
  timeSpentCharging?: number;
  stoppedReason?: ReasonEnumType;
  /**
   * The ID given to remote start request (&lt;&lt;requeststarttransactionrequest, RequestStartTransactionRequest&gt;&gt;. This enables to CSMS to match the started transaction to the given start request.
   *
   */
  remoteStartId?: number;
}
/**
 * EVSE
 * urn:x-oca:ocpp:uid:2:233123
 * Electric Vehicle Supply Equipment
 *
 */
export interface EVSEType {
  customData?: CustomDataType;
  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * EVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.
   *
   */
  id: number;
  /**
   * An id to designate a specific connector (on an EVSE) by connector index number.
   *
   */
  connectorId?: number;
}
/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 *
 */
export interface IdTokenType {
  customData?: CustomDataType;
  /**
   * @minItems 1
   */
  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];
  /**
   * IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.
   *
   */
  idToken: string;
  type: IdTokenEnumType;
}
/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 *
 */
export interface AdditionalInfoType {
  customData?: CustomDataType;
  /**
   * This field specifies the additional IdToken.
   *
   */
  additionalIdToken: string;
  /**
   * This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.
   *
   */
  type: string;
}
