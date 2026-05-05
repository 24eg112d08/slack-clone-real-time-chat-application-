// Middleware factory to restrict route access to specific user roles.
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // req.user should already be attached by the auth middleware.
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};