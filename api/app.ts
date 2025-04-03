import "./config/env";
import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route";
import postRoute from "./routes/post.route";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
	console.log("Server is running on port 8800");
});