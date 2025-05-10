// import { JWTService } from "../../service/Users/JWTService";
import LoginUseCasePort from "../../../domain/ports/driver/usecase/Users/loginUseCasePort";
import CredentialValidationServicePort from "../../../domain/ports/driver/service/Users/LoginServicePort";
import { AbstractUser } from "../../../domain/model/user/AbstractUser";

export default class LoginUseCase implements LoginUseCasePort {
    
    constructor(
        private readonly credentialValidationService: CredentialValidationServicePort,
        // private readonly jwtService: JWTService 
    ) {}

    async login(username: string, password: string): Promise<AbstractUser | null> {

        const user = await this.credentialValidationService.validation(username, password);
        
        if (!user) {
            return null; 
        } else {
            // return this.jwtService.generateToken(user.getIdUser(), user.getUserName());
            return user;
        }
        
    }

    
}