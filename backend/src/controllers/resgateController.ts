import { Request, Response } from "express";
import { ResgateService } from "../services/resgateService";

const resgateService = new ResgateService();

export class ResgateController {

  async solicitar(req: Request, res: Response) {

    const { usuarioId, valor } = req.body;

    const resultado = await resgateService.solicitar(
      usuarioId,
      valor
    );

    res.status(201).json(resultado);

  }

}