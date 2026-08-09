import { Request, Response } from "express";
import { CashbackService } from "../services/cashbackService";

const cashbackService = new CashbackService();

export class CashbackController {

  async listar(req: Request, res: Response) {

    const usuarioId = Number(req.params.usuarioId);

    const cashback = await cashbackService.listar(usuarioId);

    res.json(cashback);

  }

}