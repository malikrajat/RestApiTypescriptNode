import { Express, Request, Response } from "express";
import createUserHandler from "./controller/user.controller";
import validate from "./middleware/validateResource";
import createUserSchema from "./schema/user.schema";

const routes = (app: Express) => {
	app.get("/health", (req: Request, res: Response) => res.sendStatus(200));
	app.post("/api/users", validate(createUserSchema), createUserHandler);
};
export default routes;
