import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import empresaRoutes from "./routes/empresaRoutes";
import cashbackRoutes from "./routes/cashbackRoutes";
import historicoRoutes from "./routes/historicoRoutes";
import resgateRoutes from "./routes/resgateRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/empresas", empresaRoutes);
app.use("/api/cashback", cashbackRoutes);
app.use("/api/historico", historicoRoutes);
app.use("/api/resgates", resgateRoutes);

export default app;