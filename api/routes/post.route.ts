import express, { Request, Response } from "express";

const router = express.Router();

router.get("/test", (req: Request, res: Response) => {
	console.log("router is working fine!");
	res.send("This route is ok!");
});

export default router;