import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Authentication routes for registering and logging in users.
router.post("/users", registerUser);   // Register a new user.
router.post("/login", loginUser); // Log in an existing user.
router.get("/logout", logoutUser); // Optional logout endpoint if implemented elsewhere.

export default router;