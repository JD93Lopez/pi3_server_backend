import { BiomeDoc } from "../../../domain/docs/BiomeDoc";
import { AbstractBiome } from "../../../domain/model/biome/AbstractBiome";
import { BiomeRepositoryPort } from "../../../domain/ports/driven/BiomeRepositoryPort";
import { UpdateBiomeServicePort } from "../../../domain/ports/driver/service/UpdateBiomeServicePort";

export class UpdateBiomeService implements UpdateBiomeServicePort {
  constructor(private biomeRepository: BiomeRepositoryPort) {}

  async updateBiome(id_user: number, biome: AbstractBiome): Promise<number> {    
    const biomeDoc: BiomeDoc = {
      id_biome: biome.getIdBiome(),
      name: biome.getName(),
      THEMES_id_theme: biome.getTheme().getIdTheme(),
      USERS_id_user: id_user,
    };

    if (!biomeDoc.id_biome || biomeDoc.id_biome <= 0) {
      throw new Error("Invalid biome ID.");
    }

    const updatedBiomeId = await this.biomeRepository.update(biomeDoc);

    if (updatedBiomeId === -1) {
      throw new Error("Failed to update biome. Biome ID may not exist.");
    }

    return updatedBiomeId;
  }
}
