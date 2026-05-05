import jwt from "jsonwebtoken";

// Create a signed JWT token for a user ID, valid for 7 days.
export const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};