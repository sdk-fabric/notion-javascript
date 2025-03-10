/**
 * Client automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {ClientAbstract, CredentialsInterface, TokenStoreInterface, HttpRequest} from "sdkgen-client"
import {HttpBearer} from "sdkgen-client"
import {Anonymous} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {UserTag} from "./UserTag";
import {DatabaseTag} from "./DatabaseTag";
import {PageTag} from "./PageTag";

export class Client extends ClientAbstract {
    public user(): UserTag
    {
        return new UserTag(
            this.httpClient,
            this.parser
        );
    }

    public database(): DatabaseTag
    {
        return new DatabaseTag(
            this.httpClient,
            this.parser
        );
    }

    public page(): PageTag
    {
        return new PageTag(
            this.httpClient,
            this.parser
        );
    }



    public static build(token: string): Client
    {
        return new Client('https://api.notion.com', new HttpBearer(token));
    }

    public static buildAnonymous(): Client
    {
        return new Client('https://api.notion.com', new Anonymous());
    }
}
