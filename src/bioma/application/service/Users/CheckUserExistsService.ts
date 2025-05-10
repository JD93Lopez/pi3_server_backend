import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import { CheckUserExistsServicePort } from "../../../domain/ports/driver/service/Users/CheckUserExistsServicePort";

export class CheckUserExistsService implements CheckUserExistsServicePort {
    constructor(private userRepository: UserRepositoryPort) {}

    async checkUserExists(user_name: string): Promise<number> {
        const exists = await this.userRepository.checkUserExists(user_name);
        return exists;
    }
}