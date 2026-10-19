import db from "../config/database";
import { Usuario } from "../models/Usuario";

export class AuthService {

  async login(identificador: string, senha: string) {
    const valor = identificador.trim();
    const email = valor.toLowerCase();
    const cpf = valor.replace(/\D/g, "");
    const [rows] = await db.query(
      `SELECT * FROM usuarios
       WHERE LOWER(email) = ?
          OR REPLACE(REPLACE(REPLACE(cpf, '.', ''), '-', ''), ' ', '') = ?`,
      [email, cpf]
    ) as [any[], any];

    const usuario = Array.isArray(rows) ? rows[0] : null;

    if (!usuario) {
      return null;
    }

    if (usuario.senha !== senha) {
      return null;
    }

    return usuario;
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
      usuario.email.trim().toLowerCase(),
      usuario.senha,
      usuario.saldoCashback,
      usuario.ativo,
    ];

    const [result] = await db.execute(sql, values);

    return result;
  }

}