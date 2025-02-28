import { CreateBiomService } from "../../../application/service/Biomes/CreateBiomeService"
import { CreateBiomeServicePort } from "../../../domain/ports/driver/service/CreateBiomeServicePort"
import BiomeRepositoryFactory from "../repository/BiomeRepositoryFactory"

export default class CreateBiomeServiceFactory {

    public static readonly create = (): CreateBiomeServicePort  => {
        
        const repository = BiomeRepositoryFactory.create()
        return new CreateBiomService(repository)
        
    }

}
