import { Router } from "express";
import { CashbackController } from "../controllers/cashbackController";

const router = Router();
const cashbackController = new CashbackController();

router.get("/:usuarioId", (req, res) =>
  cashbackController.listar(req, res)
);

export default router;