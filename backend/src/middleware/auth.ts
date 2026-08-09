import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ENV } from "../config/env";

export interface AuthRequest extends Request {
  user?: any;
}

export function authenticateToken(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token não informado.",
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, ENV.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Token inválido.",
      });
    }

    req.user = decoded;

    next();
  });
}