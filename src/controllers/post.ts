import { Request, Response } from "express";
import Post from "../models/post";

const catchBlock = (e: unknown, res: Response) => {
  if (e instanceof Error) {
    console.log(e.message);
  } else {
    console.log("Unexpected error", e);
  }
  res.status(500).send;
};

const PostController = {
  New: async (req: Request, res: Response) => {
    try {
      const posts = await Post.find();

      console.log("successful");

      res.json({ posts: posts });

      res.status(200).send();
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
  Create: async (req: Request, res: Response) => {
    const data = req.body;

    try {
      const post = new Post({
        text: data.text,
      });

      const newPost = await post.save();

      res.json(newPost);

      res.status(200).send();
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
};

export default PostController;
