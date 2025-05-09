import { ItemDoc } from "../../domain/docs/ItemDoc";
import AbstractItem from "../../domain/model/item/AbstractItem";
import Item from "../../domain/model/item/Item";

export default class ItemHelper {
 
    databaseToDomainItem(itemDoc: ItemDoc): AbstractItem {
        return new Item({
            id_item: itemDoc.id_item,
            image: itemDoc.image,
            cost: itemDoc.cost,
            owned: itemDoc.owned == 1 ? true : false,
            selected: itemDoc.selected == 1 ? 1 : 0,
        })
    }

}

