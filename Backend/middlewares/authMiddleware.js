import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protect routes by verifying JWT token and attaching the user object to the request.
export const protect = async (req, res, next) => {
  try {
    let token;

    // Extract token from Authorization header: Bearer <token>.
    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // Verify token signature and expiration.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user object to the request for later route handlers.
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Token failed" });
  }
};