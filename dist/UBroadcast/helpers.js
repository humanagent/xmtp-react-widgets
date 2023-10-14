"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wipeKeys = exports.storeKeys = exports.loadKeys = exports.getEnv = exports.buildLocalStorageKey = void 0;
// Create a client using keys returned from getKeys
var ENCODING = "binary";
var getEnv = function getEnv() {
  return "production";
};
exports.getEnv = getEnv;
var buildLocalStorageKey = function buildLocalStorageKey(walletAddress) {
  return walletAddress ? "xmtp:".concat(getEnv, ":keys:").concat(walletAddress) : "";
};
exports.buildLocalStorageKey = buildLocalStorageKey;
var loadKeys = function loadKeys(walletAddress) {
  var val = localStorage.getItem(buildLocalStorageKey(walletAddress));
  return val ? Buffer.from(val, ENCODING) : null;
};
exports.loadKeys = loadKeys;
var storeKeys = function storeKeys(walletAddress, keys) {
  localStorage.setItem(buildLocalStorageKey(walletAddress), Buffer.from(keys).toString(ENCODING));
};
exports.storeKeys = storeKeys;
var wipeKeys = function wipeKeys(walletAddress) {
  // This will clear the conversation cache + the private keys
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};
exports.wipeKeys = wipeKeys;