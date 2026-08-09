import db from "../config/database";

export class UsuarioService {

  async listar() {
    const [rows] = await db.query(
      "SELECT * FROM usuarios"
    );

    return rows;
  }

  async buscarPorId(id: number) {
    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE id = ?",
      [id]
    );

    return rows;
  }

}