import { Request, Response } from "express";
import createUser from "../service/user.service";
import logger from "../utils/logger";
import { CreateUserInput } from "../schema/user.schema";

const createUserHandler = async (
	req: Request<{}, {}, CreateUserInput["body"]>,
	res: Response
) => {
	try {
		const user = await createUser(req.body);
		return user;
	} catch (error: any) {
		return logger.error(error);
		return res.status(409).send(error.message);
	}
};

export default createUserHandler;
