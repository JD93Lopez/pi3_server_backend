import { CheckUserExistsServicePort } from "../../../domain/ports/driver/service/Users/CheckUserExistsServicePort";
import CheckUserExistsUseCasePort from "../../../domain/ports/driver/usecase/Users/CheckUserExistsUseCasePort";

export default class CheckUserExistsUseCase implements CheckUserExistsUseCasePort {
    constructor(private readonly checkUserExistsService: CheckUserExistsServicePort) {}

    async checkUserExists(user_name: string): Promise<number> {
        return await this.checkUserExistsService.checkUserExists(user_name);
    }
}