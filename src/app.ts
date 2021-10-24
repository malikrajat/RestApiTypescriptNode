import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "../config/routes";

const port = config.get<number>("PORT");
const app = express();

app.listen(port, async () => {
	logger.info(`Server is running on http://localhost:${port}`);
	await connect();

	routes(app);
});
