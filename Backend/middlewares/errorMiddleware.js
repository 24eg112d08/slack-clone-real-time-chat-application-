// Global error handling middleware to return a JSON error response.
// This middleware can be mounted last in the Express stack.
export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  });
};