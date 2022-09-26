import * as dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import postRouter from "./routes/post";
import userRouter from "./routes/user";
import accommodationRouter from "./routes/accommodation";
import { auth } from "./utils/auth";
import multer, { FileFilterCallback, MulterError } from "multer";
import { v4 as uuid } from "uuid";
import catchBlock from "./utils/catchBlock";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

if (!process.env.URI) {
  process.exit(1);
}
const uri: string = process.env.URI;

interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuid()}-${originalname}`);
  },
});

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

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000, files: 5 },
});

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/post", auth, postRouter);
app.use("/user", userRouter);
app.use("/accommodation", auth, accommodationRouter);
app.post("/upload", upload.array("file", 5), (req, res) => {
  console.log(req.files);
  res.send("successful");
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "File is too large",
      });
    }
    if (error.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        message: "File limit reached",
      });
    }
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        message: "File must be an image",
      });
    }
  }
  console.log(MulterError);
  next();
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err.message));

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
