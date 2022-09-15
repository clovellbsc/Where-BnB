import express from "express";
import PostController from "../controllers/post";
const postRouter = express.Router();

postRouter.get("/:id", PostController.New);

export default postRouter;
