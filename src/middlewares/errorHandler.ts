import { NextFunction, Request, Response } from "express";
import { APIError } from "../configs/ApiError";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }

    if (err instanceof APIError) {
        res.status(err.httpCode).json({ error: err.name });
        return;
    }

    console.log(err);
    
    
    res.status(500).json({
        error: {
        name: "Internal Server Error",
        }
    });
};

export default errorHandler;