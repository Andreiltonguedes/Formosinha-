import { Router } from "express";
import { AuthController } from "../controllers/authController";

const router = Router();
const authController = new AuthController();

router.post("/login", (req, res) => authController.login(req, res));

router.post("/cadastro", (req, res) =>
  authController.cadastrar(req, res)
);

export default router;