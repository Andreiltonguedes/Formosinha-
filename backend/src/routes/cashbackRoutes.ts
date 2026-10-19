import { Router } from "express";
import { CashbackController } from "../controllers/cashbackController";

const router = Router();
const cashbackController = new CashbackController();

router.get("/", (req, res) => {
  (req as any).params = { ...(req as any).params, usuarioId: "1" };
  return cashbackController.listar(req, res);
});

router.get("/:usuarioId", (req, res) =>
  cashbackController.listar(req, res)
);

export default router;