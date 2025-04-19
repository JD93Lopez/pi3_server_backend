import { ItemRepositoryPort } from "../../../domain/ports/driven/ItemRepositoryPort";
import { GetStoreItemsServicePort } from "../../../domain/ports/driver/service/Items/GetStoreItemsServicePort";

export default class GetStoreItemsService implements GetStoreItemsServicePort {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  public async getStoreItems(user_id: number): Promise<any[]> {
    if (!user_id) {
      throw new Error("Parámetro inválido: user_id es requerido");
    }

    const result = await this.itemRepository.getStoreItems(user_id);

    return result;
  }
}