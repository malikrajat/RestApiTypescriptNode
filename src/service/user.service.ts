import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.Model";

const createUser = async (input: DocumentDefinition<UserDocument>) => {
	try {
		return await UserModel.create(input);
	} catch (error: any) {
		throw new Error(error);
	}
};

export default createUser;
