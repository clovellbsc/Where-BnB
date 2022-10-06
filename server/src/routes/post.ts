import express from "express";
import PostController from "../controllers/post";
const postRouter = express.Router();

postRouter.get("/", PostController.New);
postRouter.post("/", PostController.Create);

export default postRouter;
