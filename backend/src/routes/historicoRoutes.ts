import { Router } from "express";
import { HistoricoController } from "../controllers/historicoController";

const router = Router();
const historicoController = new HistoricoController();

router.get("/:usuarioId", (req, res) =>
  historicoController.listar(req, res)
);

export default router;