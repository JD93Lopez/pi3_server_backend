import LoginServicePort from "../../../domain/ports/driver/service/LoginServicePort";
import LoginUseCasePort from "../../../domain/ports/driver/usecase/loginUseCasePort";

export default class LoginUseCase implements LoginUseCasePort
{
    constructor(private readonly loginService: LoginServicePort) {}
    
    async login(username: string, password: string): Promise<any> {
        return this.loginService.auth(username, password);

    }
}