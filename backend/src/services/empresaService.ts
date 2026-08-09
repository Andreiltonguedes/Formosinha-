import db from "../config/database";

export class EmpresaService {

  async listar() {
    const [rows] = await db.query(
      "SELECT * FROM empresas"
    );

    return rows;
  }

}