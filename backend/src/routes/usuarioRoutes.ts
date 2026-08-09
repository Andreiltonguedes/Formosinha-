import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";

const router = Router();
const usuarioController = new UsuarioController();

router.get("/", (req, res) =>
  usuarioController.listar(req, res)
);

router.get("/:id", (req, res) =>
  usuarioController.buscar(req, res)
);

export default router;