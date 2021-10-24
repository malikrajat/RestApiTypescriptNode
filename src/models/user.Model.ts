import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserInput {
	email: string;
	name: string;
	password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
	createdAt: string;
	updatedAt: string;
	comparPassword(userPassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
	{
		email: {
			type: "string",
			required: true,
			unique: true,
		},
		name: {
			type: "string",
			required: true,
		},
		password: {
			type: "string",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	let user = this as UserDocument;
	if (!user.isModified("password")) {
		return next();
	}
	const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
	const hash = await bcrypt.hashSync(user.password, salt);
	user.password = hash;
	return next();
});

userSchema.methods.comparPassword = async function (
	userPassword: string
): Promise<Boolean> {
	const user = this as UserDocument;
	return bcrypt.compare(userPassword, user.password).catch((e) => false);
};

const User = mongoose.model("User", userSchema);
export default User;
