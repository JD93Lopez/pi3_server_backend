import BiomesByUserRetriverService from "../../../application/service/Biomes/BiomesByUserRetriverService";
import BiomesByUserRetriverServicePort from "../../../domain/ports/driver/service/BiomeByUserRetriverServicePort";
import BiomeRepositoryFactory from "../repository/BiomeRepositoryFactory";
import ThemeRepositoryFactory from "../repository/ThemeRepositoryFactory";


export default class BiomesByUserRetriverServiceFactory {

    public static readonly create = (): BiomesByUserRetriverServicePort => {
        const biomeRepository  = BiomeRepositoryFactory.create();
        const themeRepository = ThemeRepositoryFactory.create();
        return new BiomesByUserRetriverService(biomeRepository, themeRepository);
    }
    
}