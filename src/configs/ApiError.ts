import { HttpStatusCode } from "../utils/HttpStatusCode";
import BaseError  from "./BaseError";

export class APIError extends BaseError {
    constructor ( name: string, httpCode = HttpStatusCode.INTERNALL_SERVER, description = 'internal server error'){
        super(name, httpCode, description);
    }
}