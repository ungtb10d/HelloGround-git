"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class SecurityError extends Error {}

exports.SecurityError = SecurityError;
class MessageError extends Error {
  constructor(msg, code) {
    super(msg);
    this.code = code;
  }

}

exports.MessageError = MessageError;
class SpawnError extends Error {}
exports.SpawnError = SpawnError;