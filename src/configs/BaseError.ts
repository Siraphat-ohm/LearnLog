import { HttpStatusCode } from "../utils/HttpStatusCode";

class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpStatusCode;

    constructor ( name: string, httpCode: HttpStatusCode, description: string ) {
        super(description);
        Object.setPrototypeOf( this, new.target.prototype );
        this.name = name;
        this.httpCode = httpCode;

        Error.captureStackTrace( this );
    }
}

export default BaseError;