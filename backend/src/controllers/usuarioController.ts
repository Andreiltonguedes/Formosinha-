import { Request, Response } from "express";
import { UsuarioService } from "../services/usuarioService";

const usuarioService = new UsuarioService();

export class UsuarioController {

  async listar(req: Request, res: Response) {

    const usuarios = await usuarioService.listar();

    res.json(usuarios);

  }

  async buscar(req: Request, res: Response) {

    const id = Number(req.params.id);

    const usuario = await usuarioService.buscarPorId(id);

    res.json(usuario);

  }

}