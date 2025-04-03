import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";

export const register = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;

	try {
		// HASH THE PASSWORD
		const hashedPassword = await bcryptjs.hash(password, 10);

		// CREATE A NEW USER AND SAVE TO DB
		const newUser = await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			}
		});

		res.status(201).json({ message: "User created successfully!" });
	}
	catch (err) {
		console.error("Something went wrong...", err);
		res.status(500).json({ message: "Failed to create user" });
	}	
}

export const login = async (req: Request, res: Response): Promise<any> => {
	const { username, password } = req.body;

	try {
		// CHECK IF THE USER EXISTS
		const user = await prisma.user.findUnique({
			where: { username }
		});
		if (!user) return res.status(401).json({ messsage: "Invalid credentials" });

		// CHECK IF THE PASSWORD IS CORRECT
		const isPasswordValid = await bcryptjs.compare(password, user.password);
		if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

		// GENERATE COOKIE TOKEN AND SEND TO THE USER
		const token = jwt.sign({
			id: user.id
		}, process.env.JWT_SECRET_KEY as string);

		const age = 1000 * 60 * 60 * 24 * 7;
		res.cookie("token", token, {
			httpOnly: true,
			maxAge: age,
			//secure: true,
		}).status(200).json({ message: "Login successfull!" });
	}
	catch (err) {
		console.error("Failed to login", err);
		res.status(500).json({ message: "Failed to login" });
	}
}

export const logout = (req: Request, res: Response) => {
	res.clearCookie("token").status(200).json({ message: "Logged out successfully" });
}