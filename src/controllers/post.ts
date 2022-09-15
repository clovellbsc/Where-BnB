import { Request, Response } from "express";

const PostController = {
  New: async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
      const posts = await Post.find({
        userId: userId,
      });
      console.log("successful");
      res.json({ posts: posts });
      res.status(200).send();
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("Unexpected error", e);
      }
      res.status(500).send;
    }
  },
};

export default PostController;
