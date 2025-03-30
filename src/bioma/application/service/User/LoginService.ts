import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import LoginServicePort from "../../../domain/ports/driver/service/LoginServicePort";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default class LoginService implements LoginServicePort {
    
  constructor(private userRepository: UserRepositoryPort) {}

  async auth(username: string, password: string): Promise<any> {

    const userdb = await this.userRepository.findByUserName(username);

    if (!userdb) {
      return false;
    }

    if (userdb.password !== password) {
      return false;
    }

    // Verificar que JWT_SECRET esté definido
    const jwtSecret = process.env['JWT_SECRET'];
    if (!jwtSecret) {
      throw new Error("JWT secret is not defined in the environment variables.");
      return false;
    }

    return jwt.sign(
      { user_name: userdb.user_name, userId: userdb.id_user },
      jwtSecret,
      { expiresIn: '7h' }
    );
  }
}
