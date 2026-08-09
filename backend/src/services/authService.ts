import db from "../config/database";
import { Usuario } from "../models/Usuario";

export class AuthService {

  async login(email: string) {
    const [rows] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    return rows;
  }

  async cadastrar(usuario: Usuario) {
    const sql = `
      INSERT INTO usuarios
      (nome, cpf, telefone, email, senha, saldoCashback, ativo)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      usuario.nome,
      usuario.cpf,
      usuario.telefone,
      usuario.email,
      usuario.senha,
      usuario.saldoCashback,
      usuario.ativo,
    ];

    const [result] = await db.execute(sql, values);

    return result;
  }

}