/**
 * Page automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {User} from "./User";
import {DatabaseId} from "./DatabaseId";
import {PageId} from "./PageId";
export interface Page {
    object?: string
    id?: string
    created_time?: string
    last_edited_time?: string
    created_by?: User
    last_edited_by?: User
    cover?: string
    icon?: string
    parent?: DatabaseId | PageId
    in_trash?: boolean
    properties?: Record<string, any>
    url?: string
    public_url?: string
}
