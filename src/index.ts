import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import postRouter from "./routes/post";
import userRouter from "./routes/user";
import accommodationRouter from "./routes/accommodation";
import { auth } from "./utils/auth";
import multer from "multer";

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

/**
 *  App Configuration
 */

const upload = multer({ dest: "uploads" });

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
