// application/services/DeleteBiomeService.ts
import { BiomeRepositoryPort } from "../../../domain/ports/driven/BiomeRepositoryPort";
import { DeleteBiomeServicePort } from "../../../domain/ports/driver/service/DeleteBiomeServicePort";

export class DeleteBiomeService implements DeleteBiomeServicePort {
  constructor(private biomeRepository: BiomeRepositoryPort) {}
  async deleteBiome(id_biome: number): Promise<boolean> {
    const deletionResult = await this.biomeRepository.delete(id_biome);

    if (deletionResult) {
      return deletionResult;
    } else if (deletionResult) {
      throw new Error(`Biome with ID ${id_biome} does not exist or could not be deleted.`);
    } else {
      throw new Error("Unexpected result from biome repository.");
    }
  }
}