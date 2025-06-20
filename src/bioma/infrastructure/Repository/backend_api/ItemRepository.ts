import { ItemDoc } from "../../../domain/docs/ItemDoc";
import { ItemRepositoryPort } from "../../../domain/ports/driven/ItemRepositoryPort";
import ItemDBC from "./dbc/ItemDBC";

export default class ItemRepository implements ItemRepositoryPort {
     
    private readonly itemDBC : ItemDBC;

    constructor() {
        this.itemDBC = new ItemDBC();
    }
    async buyItem(user_id: number, item_id: number): Promise<number> {
        const result = await this.itemDBC.buyItem(user_id, item_id);
        return result;
    }

    async getStoreItems(user_id: number): Promise<ItemDoc[]> {
        const items = await this.itemDBC.getStoreItems(user_id);
        return items;
    }
    
    
}