export const allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // Check if user exists (set by auth middleware)
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    const userRole = req.user.role;

    // If role is missing
    if (!userRole) {
      return res.status(403).json({
        success: false,
        message: "Role not assigned"
      });
    }

    // Check if role is allowed
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: "Access denied"
      });
    }

    next();
  };
};
