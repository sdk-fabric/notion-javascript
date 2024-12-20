/**
 * DatabaseTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Database} from "./Database";

export class DatabaseTag extends TagAbstract {
    /**
     * Retrieves a database object — information that describes the structure and columns of a database — for a provided database ID. The response adheres to any limits to an integration’s capabilities.
     *
     * @returns {Promise<Database>}
     * @throws {ClientException}
     */
    public async get(databaseId: string): Promise<Database> {
        const url = this.parser.url('/v1/databases/:database_id', {
            'database_id': databaseId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Database>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
