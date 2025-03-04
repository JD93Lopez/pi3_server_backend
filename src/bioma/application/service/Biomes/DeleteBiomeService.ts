// application/services/DeleteBiomeService.ts
import { BiomeDoc } from "../../../domain/docs/BiomeDoc";
import { AbstractBiome } from "../../../domain/model/biome/AbstractBiome";
import { BiomeRepositoryPort } from "../../../domain/ports/driven/BiomeRepositoryPort";
import { DeleteBiomeServicePort } from "../../../domain/ports/driver/service/DeleteBiomeServicePort";

export class DeleteBiomeService implements DeleteBiomeServicePort {
  constructor(private biomeRepository: BiomeRepositoryPort) {}
  async deleteBiome(id_user: number, biome: AbstractBiome): Promise<boolean> {
    const biomeDoc: BiomeDoc = {
      id_biome: biome.getIdBiome(),
      name: biome.getName(),
      THEMES_id_theme: biome.getTheme().getIdTheme(),
      USERS_id_user: id_user,
    };
    if (!biomeDoc.id_biome || biomeDoc.id_biome <= 0) {
      throw new Error("Invalid biome ID.");
    }
    if (!id_user || id_user <= 0) {
      throw new Error("Invalid user ID.");
    }

    const deletionResult = await this.biomeRepository.delete(biomeDoc);

    if (deletionResult) {
      return deletionResult;
    } else if (deletionResult) {
      throw new Error(`Biome with ID ${biomeDoc.id_biome} does not exist or could not be deleted.`);
    } else {
      throw new Error("Unexpected result from biome repository.");
    }
  }
}