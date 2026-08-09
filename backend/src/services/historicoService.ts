import db from "../config/database";

export class HistoricoService {

  async listar(usuarioId: number) {
    const [rows] = await db.query(
      "SELECT * FROM historico WHERE usuarioId = ?",
      [usuarioId]
    );

    return rows;
  }

}