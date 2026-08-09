import { Request, Response } from "express";
import { HistoricoService } from "../services/historicoService";

const historicoService = new HistoricoService();

export class HistoricoController {

  async listar(req: Request, res: Response) {

    const usuarioId = Number(req.params.usuarioId);

    const historico = await historicoService.listar(usuarioId);

    res.json(historico);

  }

}