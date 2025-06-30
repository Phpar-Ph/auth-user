import express from "express";
import authRouter from "./routes/authRouter.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: "5mb" }));
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
