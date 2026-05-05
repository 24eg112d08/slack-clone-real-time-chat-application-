import express from "express";
import { uploadFile, getFileById, deleteFile } from "../controllers/fileController.js";

const fileRouter = express.Router();

fileRouter.post("/upload", uploadFile);
fileRouter.get("/:fileId", getFileById);
fileRouter.delete("/:fileId", deleteFile);

export default fileRouter;