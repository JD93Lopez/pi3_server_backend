import { DeleteBiomeServicePort } from "../../../domain/ports/driver/service/DeleteBiomeServicePort";
import DeleteBiomeUseCasePort from "../../../domain/ports/driver/usecase/DeleteBiomeUseCasePort";
import { BiomeInterface } from "../../../domain/types/BiomeInterface";
import BiomeHelper from "../../helper/BiomeHelper";

export default class DeleteBiomeUseCase implements DeleteBiomeUseCasePort{
    constructor(private deleteBiomeService: DeleteBiomeServicePort) {}

    async deleteBiome(id_user: number, biomeClient: BiomeInterface): Promise<boolean> {
        const biomeHelper = new BiomeHelper();
        const biome = biomeHelper.endpointToDomainBiome(biomeClient);

        const deleteBiomeResult = await this.deleteBiomeService.deleteBiome(id_user, biome)
        return deleteBiomeResult;
    }
}