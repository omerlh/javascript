/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* ContainerStateTerminated is a terminated state of a container.
*/
export class V1ContainerStateTerminated {
    /**
    * Container's ID in the format 'docker://<container_id>'
    */
    'containerID'?: string;
    /**
    * Exit status from the last termination of the container
    */
    'exitCode': number;
    /**
    * Time at which the container last terminated
    */
    'finishedAt'?: Date;
    /**
    * Message regarding the last termination of the container
    */
    'message'?: string;
    /**
    * (brief) reason from the last termination of the container
    */
    'reason'?: string;
    /**
    * Signal from the last termination of the container
    */
    'signal'?: number;
    /**
    * Time at which previous execution of the container started
    */
    'startedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerID",
            "baseName": "containerID",
            "type": "string",
            "format": ""
        },
        {
            "name": "exitCode",
            "baseName": "exitCode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "finishedAt",
            "baseName": "finishedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "signal",
            "baseName": "signal",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerStateTerminated.attributeTypeMap;
    }

    public constructor() {
    }
}
