import { Secret } from "jsonwebtoken";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: String;
      ATLAS_URI: String;
      ACCESS_TOKEN: Secret;
      REFRESH_TOKEN: Secret;
    }
  }
}
