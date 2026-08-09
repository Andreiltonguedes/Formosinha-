import db from "../config/database";

export class ResgateService {

  async solicitar(usuarioId: number, valor: number) {

    const sql = `
      INSERT INTO resgates
      (usuarioId, valor, status)
      VALUES (?, ?, 'PENDENTE')
    `;

    const [result] = await db.execute(sql, [
      usuarioId,
      valor,
    ]);

    return result;
  }

}