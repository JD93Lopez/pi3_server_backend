import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import UpdatePetNameServicePort from "../../../domain/ports/driver/service/Users/UpdatePetNameServicePort";

export default class UpdatePetNameService implements UpdatePetNameServicePort {
    constructor(private userRepository: UserRepositoryPort) {}

    async updatePetName(userId: number, petName: string): Promise<void> {
        await this.userRepository.updatePetName(userId, petName);
    }
}