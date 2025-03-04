import { UpdateBiomeServicePort } from "../../../domain/ports/driver/service/UpdateBiomeServicePort";
import UpdateBiomeUseCasePort from "../../../domain/ports/driver/usecase/UpdateBiomeUseCasePort";
import { BiomeInterface } from "../../../domain/types/BiomeInterface";
import BiomeHelper from "../../helper/BiomeHelper";

export default class UpdateBiomeUseCase implements UpdateBiomeUseCasePort {
    
    constructor(
        private updateBiomeService: UpdateBiomeServicePort
    ) {}

    async updateBiome(biomeClient: BiomeInterface): Promise<number> {
        const biomeHelper = new BiomeHelper();
        const biome = biomeHelper.endpointToDomainBiome(biomeClient);

        console.log("Console log en use case de biome ", biome);

        const updatedBiomeId = await this.updateBiomeService.updateBiome(biome);

        return updatedBiomeId;
    }
}