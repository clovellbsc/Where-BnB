import { Request, Response } from "express";

const catchBlock = (e: unknown, res: Response) => {
  if (e instanceof Error) {
    console.log(e.message);
  } else {
    console.log("Unexpected error", e);
  }
  res.status(500).send;
};

export default catchBlock;
