import { S3 } from "aws-sdk";
import { v4 as uuid } from "uuid";

export interface Param {
  Bucket: string;
  Key: string;
  Body: Buffer;
}

export const s3Uploadv2 = async (files: Express.Multer.File[]) => {
  const s3 = new S3();
  const params: Param[] = files.map((file) => {
    return {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `uploads/${uuid()}-${file.originalname}`,
      Body: file.buffer,
    };
  });

  const results = await Promise.all(
    params.map((param) => s3.upload(param).promise())
  );

  return results;
};
