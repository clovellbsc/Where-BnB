import { S3 } from "aws-sdk";
import { v4 as uuid } from "uuid";

export interface Param {
  Bucket: string;
  Key: string;
  Body: Buffer;
}

export const s3Uploadv2 = async (file: Express.Multer.File) => {
  const s3 = new S3();
  const param: Param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${uuid()}-${file.originalname}`,
    Body: file.buffer,
  };
  return await s3.upload(param).promise();
};
