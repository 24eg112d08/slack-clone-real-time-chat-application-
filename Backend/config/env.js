// Load environment variables and expose shared configuration values.
import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  // Port for the Express server, with a default fallback.
  PORT: process.env.PORT || 5000,
  // MongoDB connection URI from environment.
  MONGO_URI: process.env.MONGO_URI,
  // Secret used to sign JWT tokens.
  JWT_SECRET: process.env.JWT_SECRET,
};