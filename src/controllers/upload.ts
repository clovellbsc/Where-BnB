import { Request, Response } from "express";
import catchBlock from "../utils/catchBlock";
import { s3Uploadv2 } from "../utils/s3Service";

const UploadController = {
  Upload: async (req: Request, res: Response) => {
    const files = req.files as Express.Multer.File[];
    try {
      const results = await s3Uploadv2(files);
      res.send({ success: "successful", results });
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
};

export default UploadController;
