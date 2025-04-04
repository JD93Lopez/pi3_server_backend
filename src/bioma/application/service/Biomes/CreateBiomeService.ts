import { BiomeDoc } from "../../../domain/docs/BiomeDoc";
import { AbstractBiome } from "../../../domain/model/biome/AbstractBiome";
import { BiomeRepositoryPort } from "../../../domain/ports/driven/BiomeRepositoryPort";
import { CreateBiomeServicePort } from "../../../domain/ports/driver/service/Biomes/CreateBiomeServicePort";

export class CreateBiomService implements CreateBiomeServicePort {

    constructor(private biomeRepository: BiomeRepositoryPort) {}

    async createBiome(id_user: number, biome: AbstractBiome): Promise<number> {

        const biomeDoc: BiomeDoc = {
            id_biome: -1,
            name: biome.getName(),
            THEMES_id_theme: biome.getTheme().getIdTheme(),
            USERS_id_user: id_user
        };

        const idSavedBiome = await this.biomeRepository.save(biomeDoc);

        return idSavedBiome;
    }

}
    
