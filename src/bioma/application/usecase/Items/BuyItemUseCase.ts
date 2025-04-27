import { BuyItemServicePort } from "../../../domain/ports/driver/service/Items/BuyItemServicePort";


export default class BuyItemUseCase {
    constructor(
        private readonly buyItemService: BuyItemServicePort,

    ) {}

    public async buyItem(user_id: number, item_id: number): Promise<number> {
        if (!user_id || !item_id) {
        throw new Error("Parámetros inválidos: user_id y item_id son requeridos");
        }

        const result = await this.buyItemService.buyItem(user_id, item_id);

        return result;
    }
}