import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export class JWTService {
  private readonly jwtSecret: string;

  constructor() {
    this.jwtSecret = process.env['JWT_SECRET'] || '';
    if (!this.jwtSecret) {
      throw new Error("JWT_SECRET no está definido en las variables de entorno");
    }
  }

  // Genera un token JWT
    public generateToken(userId: number, username: string): string {
    return jwt.sign(
      { id_user: userId, user_name: username },
      this.jwtSecret,
      { expiresIn: '7h' }
    );
  }

  // Valida un token JWT 
  validateToken(token: string): { id_user: string, user_name: string } {
    try {
      return jwt.verify(token, this.jwtSecret) as { id_user: string, user_name: string };
    } catch (error) {
      throw new Error("Token inválido o expirado");
    }
  }
}