import { Request, Response } from "express";
import Post from "../models/post";
import catchBlock from "../utils/catchBlock";

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
