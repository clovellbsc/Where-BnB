import multer, { FileFilterCallback, MulterError } from "multer";
import { Request } from "express";

const storage = multer.memoryStorage();

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new MulterError("LIMIT_UNEXPECTED_FILE"));
  }
};

export const uploadUpTo5Images = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000, files: 5 },
});

export const upload1Image = multer({
  storage,
  fileFilter,
  limits: { fileSize: 500000, files: 1 },
});
