import { UpdateBiomeService } from "../../../application/service/Biomes/UpdateBiomeService"
import { UpdateBiomeServicePort } from "../../../domain/ports/driver/service/UpdateBiomeServicePort"
import BiomeRepositoryFactory from "../repository/BiomeRepositoryFactory"


export default class UpdateBiomeServiceFactory {

    public static readonly update = (): UpdateBiomeServicePort  => {
        
        const repository = BiomeRepositoryFactory.update()
        return new UpdateBiomeService(repository)
        
    }

}
