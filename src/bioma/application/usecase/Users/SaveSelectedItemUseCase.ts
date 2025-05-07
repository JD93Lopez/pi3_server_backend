import SaveSelectedItemServicePort from "../../../domain/ports/driver/service/Users/SaveSelectedItemServicePort";
import SaveSelectedItemUseCasePort from "../../../domain/ports/driver/usecase/Users/SaveSelectedItemUseCasePort";

export default class SaveSelectedItemUseCase implements SaveSelectedItemUseCasePort {
    constructor(private saveSelectedItemService: SaveSelectedItemServicePort) {}

    async saveSelectedItem(user_id: number, id_item: number): Promise<void> {
        await this.saveSelectedItemService.saveSelectedItem(user_id, id_item);
    }
}