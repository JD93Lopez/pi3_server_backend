import AbstractItem from "../../../domain/model/item/AbstractItem";
import { ItemRepositoryPort } from "../../../domain/ports/driven/ItemRepositoryPort";
import { GetStoreItemsServicePort } from "../../../domain/ports/driver/service/Items/GetStoreItemsServicePort";
import ItemHelper from "../../helper/ItemHelper";

export default class GetStoreItemsService implements GetStoreItemsServicePort {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  public async getStoreItems(user_id: number): Promise<AbstractItem[]> {

    const itemHelper = new ItemHelper();

    if (!user_id) {
      throw new Error("Parámetro inválido: user_id es requerido");
    }

    const results = await this.itemRepository.getStoreItems(user_id);

    const items = results.map((result)=>{return itemHelper.databaseToDomainItem(result)})

    return items;
  }
}