import JWTUseCase from "../../../../bioma/application/usecase/Users/JWTUseCase";
import { JWTService } from "../../../../bioma/application/service/Users/JWTService";
import AuthMiddleware from "../../../../express/infrastructure/authMiddleware";

// Fábrica para el middleware AuthMiddleware
export default class AuthMiddlewareFactory {
  public static create(): AuthMiddleware {
    const jwtService = new JWTService();    
    const jwtUseCase = new JWTUseCase(jwtService);
    return new AuthMiddleware(jwtUseCase);
  }
}
