import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export class AuthController {

  async login(req: Request, res: Response) {
    try {
      const { email, identificador, senha } = req.body;

      const usuario = await authService.login(identificador ?? email ?? "", senha);

      if (!usuario) {
        return res.status(401).json({
          message: "E-mail ou senha inválidos.",
        });
      }

      return res.status(200).json(usuario);

    } catch (error) {
      return res.status(500).json({
        message: "Erro ao realizar login.",
        error,
      });
    }
  }

  async cadastrar(req: Request, res: Response) {
    try {

      const resultado = await authService.cadastrar(req.body);

      res.status(201).json(resultado);

    } catch (error) {

      res.status(500).json({
        message: "Erro ao cadastrar usuário.",
        error,
      });

    }
  }

}