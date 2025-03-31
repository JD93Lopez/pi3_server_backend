import { JWTService } from "../../service/User/JWTService";
import LoginUseCasePort from "../../../domain/ports/driver/usecase/loginUseCasePort";
import CredentialValidationServicePort from "../../../domain/ports/driver/service/LoginServicePort";

export default class LoginUseCase implements LoginUseCasePort {
    
    constructor(
        private readonly credentialValidationService: CredentialValidationServicePort,
        private readonly jwtService: JWTService 
    ) {}

    async login(username: string, password: string): Promise<any> {

        const user = await this.credentialValidationService.validation(username, password);
        
        if (!user) {
            return false; 
        } else {
            return this.jwtService.generateToken(user.getIdUser(), user.getUserName());
        }
        
    }
}