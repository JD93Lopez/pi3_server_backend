import LoginService from "../../../../application/service/Users/CredentialValidationService";
import CredentialValidationServicePort from "../../../../domain/ports/driver/service/Users/LoginServicePort";
import UserRepositoryFactory from "../../repository/UserRepositoryFactory";

export default class LoginServiceFactory {
    static create(): CredentialValidationServicePort {
        const userRepository = UserRepositoryFactory.create(); 
        const loginService = new LoginService(userRepository);
        return loginService;
    }
}