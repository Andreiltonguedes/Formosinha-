import db from "../config/database";

export class CashbackService {

  async listar(usuarioId: number) {
    const [rows] = await db.query(
      "SELECT * FROM cashback WHERE usuarioId = ?",
      [usuarioId]
    );

    return rows;
  }

}