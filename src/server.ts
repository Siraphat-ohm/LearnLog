import express from "express";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";


const createServer = () => {
    const app = express();

    app.use(express.json());
    app.use("/api" ,routes);
    app.use(errorHandler);

    return app;
}

export default createServer;