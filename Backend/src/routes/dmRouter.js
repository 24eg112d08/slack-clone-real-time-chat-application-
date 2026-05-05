import express from "express";
import { getDMConversations, startDM, getDMMessages, sendDMMessage } from "../controllers/dmController.js";

const dmRouter = express.Router();

dmRouter.get("/", getDMConversations);
dmRouter.post("/", startDM);
dmRouter.get("/:dmId", getDMMessages);
dmRouter.post("/:dmId", sendDMMessage);

export default dmRouter;