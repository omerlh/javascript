/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.28.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* GroupVersion contains the \"group/version\" and \"version\" string of a version. It is made a struct to keep extensibility.
*/
export class V1GroupVersionForDiscovery {
    /**
    * groupVersion specifies the API group and version in the form \"group/version\"
    */
    'groupVersion': string;
    /**
    * version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
    */
    'version': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupVersion",
            "baseName": "groupVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1GroupVersionForDiscovery.attributeTypeMap;
    }

    public constructor() {
    }
}

