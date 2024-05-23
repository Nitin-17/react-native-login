import crypto from "crypto-browserify";
import { Buffer } from "buffer";
const APP_INVITE_PASSWORD = process.env.REACT_APP_API_URL_INVITE_PASSWORD;
window.Buffer = window.Buffer || require("buffer").Buffer;

export const encrypt = (text) => {
  const algorithm = "aes256";
  const key = crypto
    .createHash("sha256")
    .update(String(`${APP_INVITE_PASSWORD}`))
    .digest("base64")
    .substr(0, 32);
  console.log("Key is ", key);
  const iv = crypto
    .createHash("sha256")
    .update(String(`${APP_INVITE_PASSWORD}`))
    .digest("base64")
    .substr(0, 16);
  console.log("iv is ", iv);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  console.log("cipher is ", cipher);
  const encrypted = cipher.update(text, "utf8", "hex") + cipher.final("hex");
  console.log("encrypted is ", encrypted);
  return encrypted;
};

export const isLogin = () => {
  const isLoggedIn = _getAccessToken();
  if (isLoggedIn) {
    console.log(isLoggedIn);
    return true;
  }
  return false;
};
