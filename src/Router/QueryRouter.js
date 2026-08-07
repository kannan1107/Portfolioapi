import { Router } from "express";
import { sendQuery } from "../Controller/queryController.js";

const QueryRouter = Router();

QueryRouter.post("/query", sendQuery);

export default QueryRouter;
