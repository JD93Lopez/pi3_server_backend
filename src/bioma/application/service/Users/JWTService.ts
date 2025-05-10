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
  public isTokenValid(token: string): boolean {
    try {
      jwt.verify(token, this.jwtSecret);
      return true;
    } catch (error) {
      return false;
    }
  }

}