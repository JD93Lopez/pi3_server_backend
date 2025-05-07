import GetSelectedItemServicePort from "../../../domain/ports/driver/service/Users/GetSelectedItemServicePort";
import GetSelectedItemUseCasePort from "../../../domain/ports/driver/usecase/Users/GetSelectedItemUseCasePort";

export default class GetSelectedItemUseCase implements GetSelectedItemUseCasePort {
    constructor(private readonly getSelectedItemService: GetSelectedItemServicePort) {}

    async getSelectedItem(user_id: number): Promise<number> {
        return await this.getSelectedItemService.getSelectedItem(user_id);
    }
}