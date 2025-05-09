import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import SaveSelectedItemServicePort from "../../../domain/ports/driver/service/Users/SaveSelectedItemServicePort";

export default class SaveSelectedItemService implements SaveSelectedItemServicePort {
    constructor(private userRepository: UserRepositoryPort) {}

    async saveSelectedItem(user_id: number, id_item: number): Promise<number> {
        return await this.userRepository.saveSelectedItem(user_id, id_item);
    }
}