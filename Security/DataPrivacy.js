var Buffer = require("@craftzdog/react-native-buffer").Buffer;
import CryptoJS from "react-native-crypto-js";

// const CryptoJS = require("crypto-js");
//const { Buffer } = require("buffer");

function generateRandomIv(length) {
  let pool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  pool = pool.repeat(5);
  pool = shuffle(pool);
  pool = pool.substring(0, length);
  return pool.toString();
}

function shuffle(str) {
  if (arguments.length === 0) {
    throw new Error("Wrong parameter count for str_shuffle()");
  }
  if (str === null) {
    return "";
  }
  str += "";
  let newStr = "";
  let rand;
  let i = str.length;
  while (i) {
    rand = Math.floor(Math.random() * i);
    newStr += str.charAt(rand);
    str = str.substring(0, rand) + str.substr(rand + 1);
    i--;
  }
  return newStr;
}

const btoa = (text) => {
  return Buffer.from(text, "binary").toString("base64");
};

const atob = (base64) => {
  return Buffer.from(base64, "base64").toString("binary");
};

export function encryptData(data) {
  let msg = JSON.stringify(data);
  const i = generateRandomIv(16);
  const key = CryptoJS.enc.Utf8.parse("ED6C504C24FD3140D42E3BFE9F92E4A1");
  const iv = CryptoJS.enc.Utf8.parse(i);

  const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(msg), key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
  });
  var transitmessage = JSON.stringify({
    iv: btoa(i),
    value: encrypted.toString(),
  });
  transitmessage = btoa(transitmessage);
  // let request = {
  //     data: transitmessage
  // }
  console.log("encrypted data: ", transitmessage);
  return transitmessage;
}
export function decryptData(data) {
  let res = atob(data);
  let jsn = JSON.parse(res);
  const key = CryptoJS.enc.Utf8.parse("ED6C504C24FD3140D42E3BFE9F92E4A1");

  const decrypted = CryptoJS.AES.decrypt(jsn.value, key, {
    mode: CryptoJS.mode.CBC,
    iv: CryptoJS.enc.Utf8.parse(atob(jsn.iv)),
  });
  console.log("decrypted data: ", decrypted);
  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

// module.exports = {
//   encryptData,
//   decryptData,
// };
