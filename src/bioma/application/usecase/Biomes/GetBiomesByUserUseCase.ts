import { AbstractBiome } from "../../../domain/model/biome/AbstractBiome";
import BiomesByUserRetriverServicePort from "../../../domain/ports/driver/service/BiomeByUserRetriverServicePort";
import GetBiomesByUserUseCasePort from "../../../domain/ports/driver/usecase/GetBiomesByUserUseCasePort";

export default class GetBiomesByUserUseCase implements GetBiomesByUserUseCasePort{

    constructor(private biomeByUserRetriverService: BiomesByUserRetriverServicePort,
    ) {}

    async getBiomesByUser(userId: number): Promise<AbstractBiome[]> {
        try {
            
            const biomes = await this.biomeByUserRetriverService.getBiomesByUser(userId);
            return biomes;

                
        } catch (error) {
            console.error("Error retrieving biomes for user:", error);
            throw error;
        }
    }
}