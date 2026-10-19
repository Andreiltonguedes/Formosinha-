import { Router } from "express";
import { HistoricoController } from "../controllers/historicoController";

const router = Router();
const historicoController = new HistoricoController();

router.get("/", (req, res) => {
  (req as any).params = { ...(req as any).params, usuarioId: "1" };
  return historicoController.listar(req, res);
});

router.get("/:usuarioId", (req, res) =>
  historicoController.listar(req, res)
);

export default router;