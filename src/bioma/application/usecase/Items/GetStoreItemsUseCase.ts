import { GetStoreItemsServicePort } from "../../../domain/ports/driver/service/Items/GetStoreItemsServicePort";

export default class GetStoreItemsUseCase{

    constructor(
        private readonly getStoreItemsService: GetStoreItemsServicePort,

    ){}

    public async getStoreItems(user_id: number): Promise<any[]> {
        if (!user_id) {
            throw new Error("Parámetro inválido: user_id es requerido");
        }

        const result = await this.getStoreItemsService.getStoreItems(user_id);

        return result;
    }


}