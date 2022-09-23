import { Request, Response } from "express";
import catchBlock from "../utils/catchBlock";

const AccommodationController = {
  All: async (req: Request, res: Response) => {
    try {
      res.send("successful");
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
};

export default AccommodationController;
