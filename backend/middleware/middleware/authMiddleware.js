import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const JWT_SECRET = process.env.JWT_SECRET || process.env.SECRET_KEY;

export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      // Get token from cookies or Authorization header
      let token = req.cookies?.token;

      if (!token && req.headers.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Authentication required"
        });
      }

      const decoded = jwt.verify(token, JWT_SECRET);

      req.user = decoded;

      // Optional role check
      if (allowedRoles.length > 0) {
        if (!allowedRoles.includes(decoded.role)) {
          return res.status(403).json({
            success: false,
            message: "Access denied"
          });
        }
      }

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token"
      });
    }
  };
};
