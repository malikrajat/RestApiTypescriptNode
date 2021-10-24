import express from "express";
import config from "config";

const port = config.get("port");
const app = express();

app.listen(1337, () => {
	console.log(`Server is running on 1337`);
});
