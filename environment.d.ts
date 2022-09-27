import { Secret } from "jsonwebtoken";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      ATLAS_URI: string;
      ACCESS_TOKEN: Secret;
      REFRESH_TOKEN: Secret;
      AWS_ACCESS_KEY_ID: Secret;
      AWS_SECRET_ACCESS_KEY: Secret;
      AWS_REGION: string;
      AWS_BUCKET_NAME: string;
    }
  }
}
