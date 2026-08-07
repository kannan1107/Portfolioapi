import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/Config/db.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import QueryRouter from "./src/Router/QueryRouter.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173",
    process.env.FRONTEND_URL,
  ],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

app.use("/api", QueryRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
