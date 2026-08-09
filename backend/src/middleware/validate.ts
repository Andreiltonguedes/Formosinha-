import { Request, Response, NextFunction } from "express";

export function validateCadastro(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
    });
  }

  next();
}