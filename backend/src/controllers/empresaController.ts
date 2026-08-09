import { Request, Response } from "express";
import { EmpresaService } from "../services/empresaService";

const empresaService = new EmpresaService();

export class EmpresaController {

  async listar(req: Request, res: Response) {

    const empresas = await empresaService.listar();

    res.json(empresas);

  }

}