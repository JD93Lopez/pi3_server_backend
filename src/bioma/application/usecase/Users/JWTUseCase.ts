import JWTUseCasePort from "../../../domain/ports/driver/usecase/Users/JWTUseCasePort";
import { JWTService } from "../../service/Users/JWTService";

export default class JWTUseCase implements JWTUseCasePort {
    
    constructor(
        private readonly jwtService: JWTService 
    ) {}

    async singJWT(userId: number, username: string): Promise<any> {

        try {
            const response = this.jwtService.generateToken(userId, username);
            if (!response) {
                return null;
            }
            return response;

        } catch (error) {
            console.error("Error generating JWT:", error);
            return null;
        }
        
    }

    async validateToken(token: string): Promise<boolean> {
        try {
            return this.jwtService.isTokenValid(token);
        } catch (error) {
            console.error("Error validating token:", error);
            return false;
        }
    }
    
}