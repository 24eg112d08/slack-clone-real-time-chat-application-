import jwt from "jsonwebtoken";

/**
 * Sign JWT token
 */
export const signToken = (payload, expiresIn = "7d") => {
  // Use the shared JWT secret and optional expiration time.
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

/**
 * Verify JWT token
 */
export const verifyToken = (token) => {
  try {
    // Return decoded payload if the token is valid.
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    // Return null when verification fails due to invalid or expired token.
    return null;
  }
};