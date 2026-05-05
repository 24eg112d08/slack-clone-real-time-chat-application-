import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/users", registerUser);   // instead of /register
router.post("/login", loginUser);
router.get("/logout", logoutUser); // optional

export default router;