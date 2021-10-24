import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { UserDocument } from "./user.Model";

export interface SessionInput {
	user: string;
	valid: Boolean;
	userAgent: string;
}

export interface SchemaDocument extends SessionInput, mongoose.Document {
	createdAt: UserDocument["_id"];
	updatedAt: string;
}

const sessionSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		valid: {
			type: Boolean,
			default: true,
		},
		userAgent: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const SessionModel = mongoose.model("Session", sessionSchema);
export default SessionModel;
