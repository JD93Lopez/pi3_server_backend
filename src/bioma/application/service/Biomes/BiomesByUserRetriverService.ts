import { AbstractBiome } from "../../../domain/model/biome/AbstractBiome";
import { BiomeRepositoryPort } from "../../../domain/ports/driven/BiomeRepositoryPort";
import ThemeRepositoryPort from "../../../domain/ports/driven/ThemeRepositoryPort";
import BiomesByUserRetriverServicePort from "../../../domain/ports/driver/service/BiomeByUserRetriverServicePort";
import BiomeHelper from "../../helper/BiomeHelper";

export default class BiomesByUserRetriverService implements BiomesByUserRetriverServicePort {

    constructor(
         private biomeRepository: BiomeRepositoryPort,
         private themeRepository: ThemeRepositoryPort
    ) {}

    public async getBiomesByUser(userId: number): Promise<AbstractBiome[]> {
        
        const biomes = await this.biomeRepository.getBiomesByUserId(userId);
        
        const abstractBiomes = (biomes.map(async (biomeDoc) => {
            
            const themeImage = await this.themeRepository.getThemeImageById(biomeDoc.THEMES_id_theme);
            
            const biomeHelper = new BiomeHelper();
            return biomeHelper.databaseToDomainBiome(biomeDoc, themeImage);
        }
        ));

        return await Promise.all(abstractBiomes);
    }

}
