import jwt from "jsonwebtoken";

// Duplicate token utility that signs a JWT for the provided user ID.
// This file appears redundant with utils/generateToken.js and can be merged later.
export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};