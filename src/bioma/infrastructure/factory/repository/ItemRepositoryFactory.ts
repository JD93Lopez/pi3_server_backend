import { ItemRepositoryPort } from "../../../domain/ports/driven/ItemRepositoryPort";
import ItemRepository from "../../Repository/backend_api/ItemRepository";


export default class ItemRepositoryFactory {
    
    public static readonly create= (): ItemRepositoryPort => {
        return new ItemRepository();
    }

}