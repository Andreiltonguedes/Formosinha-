import { Router } from "express";
import { ResgateController } from "../controllers/resgateController";

const router = Router();
const resgateController = new ResgateController();

router.post("/", (req, res) =>
  resgateController.solicitar(req, res)
);

export default router;