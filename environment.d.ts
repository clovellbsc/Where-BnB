import { Secret } from "jsonwebtoken";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: String;
      ATLAS_URI: String;
    }
  }
}
