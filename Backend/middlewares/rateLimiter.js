// Simple in-memory rate limiter that caps requests per IP to avoid abuse.
let requests = {};

export const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!requests[ip]) requests[ip] = [];

  // Keep only requests from the last minute to enforce a sliding window.
  requests[ip] = requests[ip].filter((t) => now - t < 60000);

  if (requests[ip].length > 100) {
    return res.status(429).json({ message: "Too many requests" });
  }

  // Add the current request timestamp and continue.
  requests[ip].push(now);
  next();
};