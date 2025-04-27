import AbstractItem from "../../../../model/item/AbstractItem";

export interface GetStoreItemsServicePort {
    getStoreItems(user_id: number): Promise<AbstractItem[]>;
}