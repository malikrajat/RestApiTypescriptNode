import { object, string } from "zod";
const createUserSchema = object({
	body: object({
		name: string({
			required_error: "Name is required",
		}),
		password: string({
			required_error: "password is required",
		}).min(6, "Password is too short - Should be at least 6 characters"),
		cpassword: string({
			required_error: "Confirm password is required",
		}),
		email: string({
			required_error: "email is required",
		}).email("Not a valid email"),
	}).refine((data) => data.password === data.cpassword, {
		message: "Confirm password & password do not match required",
		path: ["passwordConfirmation"],
	}),
});
export default createUserSchema;
