/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * This contains the status of the log upload.
 *
 */
export declare type UploadLogStatusEnumType = "BadMessage" | "Idle" | "NotSupportedOperation" | "PermissionDenied" | "Uploaded" | "UploadFailure" | "Uploading" | "AcceptedCanceled";
export interface UrnOCPPCp220203LogStatusNotificationRequest {
    customData?: CustomDataType;
    status: UploadLogStatusEnumType;
    /**
     * The request id that was provided in GetLogRequest that started this log upload. This field is mandatory,
     * unless the message was triggered by a TriggerMessageRequest AND there is no log upload ongoing.
     *
     */
    requestId?: number;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
    vendorId: string;
    [k: string]: unknown;
}
