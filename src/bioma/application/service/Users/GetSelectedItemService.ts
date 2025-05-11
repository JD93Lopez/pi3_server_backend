import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import GetSelectedItemServicePort from "../../../domain/ports/driver/service/Users/GetSelectedItemServicePort";

export default class  GetSelectedItemService implements GetSelectedItemServicePort {
    constructor(private userRepository: UserRepositoryPort) {}

    async getSelectedItem(user_id: number): Promise<number> {
        let item = await this.userRepository.getSelectedItem(user_id)
        return item.id_item;
    }
}