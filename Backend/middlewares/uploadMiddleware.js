// File upload middleware using multer with disk storage configuration.
import multer from "multer";

const storage = multer.diskStorage({
  // Save files to the uploads directory.
  destination: (req, file, cb) => cb(null, "uploads/"),
  // Use a timestamp prefix to avoid name collisions.
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

export const upload = multer({ storage });