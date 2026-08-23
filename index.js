import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./src/middleware/errorHandler.js";
import QueryRouter from "./src/Router/QueryRouter.js";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "https://portfolio-kuq5.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

app.use("/api", QueryRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
