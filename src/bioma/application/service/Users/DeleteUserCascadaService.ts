import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import { DeleteUserCascadaServicePort } from "../../../domain/ports/driver/service/Users/DeleteUserCascadaServicePort";


export default class DeleteUserCascadaService implements DeleteUserCascadaServicePort {
    constructor(private userRepository: UserRepositoryPort) {}

    async deleteUserById(id: number): Promise<number> {
        return this.userRepository.deleteUserById(id);
    }
}