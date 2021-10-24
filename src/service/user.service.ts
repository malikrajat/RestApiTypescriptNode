import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.Model";

const createUser = async (
	input: DocumentDefinition<
		Omit<UserDocument, "createdAt" | "updatedAt" | "comparPassword">
	>
) => {
	try {
		return await UserModel.create(input);
	} catch (error: any) {
		throw new Error(error);
	}
};

export default createUser;
