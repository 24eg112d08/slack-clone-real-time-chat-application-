import jwt from "jsonwebtoken";

/**
 * Generate JWT token for a user
 * @param {string} userId
 * @returns {string} token
 */
export const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};