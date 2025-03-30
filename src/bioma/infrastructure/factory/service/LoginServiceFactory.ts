import LoginService from "../../../application/service/User/loginService";
import LoginServicePort from "../../../domain/ports/driver/service/LoginServicePort";
import UserRepositoryFactory from "../repository/UserRepositoryFactory";

export default class LoginServiceFactory {
    static create(): LoginServicePort {
        const userRepository = UserRepositoryFactory.create(); 
        const loginService = new LoginService(userRepository);
        return loginService;
    }
}