import jwt from "jsonwebtoken";
import { ENV } from "../config/env";

export function generateToken(payload: any) {
  return jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: "7d",
  });
}