/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * Type of attribute: Actual, Target, MinSet, MaxSet. Default is Actual when omitted.
 *
 */
export declare type AttributeEnumType = "Actual" | "Target" | "MinSet" | "MaxSet";
export interface UrnOCPPCp220203SetVariablesRequest {
    customData?: CustomDataType;
    /**
     * @minItems 1
     */
    setVariableData: [SetVariableDataType, ...SetVariableDataType[]];
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
    vendorId: string;
    [k: string]: unknown;
}
export interface SetVariableDataType {
    customData?: CustomDataType;
    attributeType?: AttributeEnumType;
    /**
     * Value to be assigned to attribute of variable.
     *
     * The Configuration Variable &lt;&lt;configkey-configuration-value-size,ConfigurationValueSize&gt;&gt; can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
     *
     */
    attributeValue: string;
    component: ComponentType;
    variable: VariableType;
}
/**
 * A physical or logical component
 *
 */
export interface ComponentType {
    customData?: CustomDataType;
    evse?: EVSEType;
    /**
     * Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.
     *
     */
    name: string;
    /**
     * Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
     *
     */
    instance?: string;
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
 * Reference key to a component-variable.
 *
 */
export interface VariableType {
    customData?: CustomDataType;
    /**
     * Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.
     *
     */
    name: string;
    /**
     * Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
     *
     */
    instance?: string;
}
