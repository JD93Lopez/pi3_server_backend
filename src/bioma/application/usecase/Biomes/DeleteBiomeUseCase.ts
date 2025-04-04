import { DeleteBiomeServicePort } from "../../../domain/ports/driver/service/Biomes/DeleteBiomeServicePort";
import DeleteBiomeUseCasePort from "../../../domain/ports/driver/usecase/Biomes/DeleteBiomeUseCasePort";

export default class DeleteBiomeUseCase implements DeleteBiomeUseCasePort{
    constructor(private deleteBiomeService: DeleteBiomeServicePort) {}

    async deleteBiome(id_biome: number): Promise<boolean> {
        const deleteBiomeResult = await this.deleteBiomeService.deleteBiome(id_biome)
        return deleteBiomeResult;
    }
}