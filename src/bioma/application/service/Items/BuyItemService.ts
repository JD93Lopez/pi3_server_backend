import { ItemRepositoryPort } from "../../../domain/ports/driven/ItemRepositoryPort";
import { BuyItemServicePort } from "../../../domain/ports/driver/service/Items/BuyItemServicePort";


export default class BuyItemService implements BuyItemServicePort {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  public async buyItem(user_id: number, item_id: number): Promise<number> {
    if (!user_id || !item_id) {
      throw new Error("Parámetros inválidos: user_id y item_id son requeridos");
    }

    const result = await this.itemRepository.buyItem(user_id, item_id);

    return result;
  }
}
