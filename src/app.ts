import createServer from "./server";

const PORT = process.env.APP_PORT || 30788;
const app = createServer();

app.listen( PORT , () => {
    console.log(`server start on port : ${PORT}`)
} );