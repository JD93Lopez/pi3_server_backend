import { ItemDoc } from "../../domain/docs/ItemDoc";
import AbstractItem from "../../domain/model/item/AbstractItem";
import Item from "../../domain/model/item/Item";

export default class ItemHelper {
 
    databaseToDomainTheme(itemDoc: ItemDoc): AbstractItem {
        return new Item()
    }

}

