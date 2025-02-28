import { CreateBiomeServicePort } from "../../../domain/ports/driver/service/CreateBiomeServicePort";
import { CreateBiomeUseCasePort } from "../../../domain/ports/driver/usecase/CreateBiomeUseCasePort";
import { BiomeInterface } from "../../../domain/types/BiomeInterface";
import BiomeHelper from "../../helper/BiomeHelper";

export default class CreateBiomeUseCase implements CreateBiomeUseCasePort {
    
    constructor(
        private createBiomeService: CreateBiomeServicePort
    ) {}

    createBiome(id_user: number, biomeClient: BiomeInterface): Promise<number> {
        const biomeHelper = new BiomeHelper();
        const biome = biomeHelper.endpointToDomainBiome(biomeClient);

        console.log("Console log en use case de biome ", biome);
        
        return this.createBiomeService.createBiome(id_user, biome);

    }
    
}