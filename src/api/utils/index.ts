import { Buffer } from "buffer";
export const encodeBase64 = (data: string) =>
  Buffer.from(data).toString("base64");

export const decodeBase64 = (encoded: string) =>
  Buffer.from(encoded, "base64").toString();

export const stringToBoolean = (bool: string) => {
  return bool.toUpperCase() === "TRUE" ? true : false;
};
