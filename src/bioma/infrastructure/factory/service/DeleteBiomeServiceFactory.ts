import { DeleteBiomeService } from "../../../application/service/Biomes/DeleteBiomeService"
import { DeleteBiomeServicePort } from "../../../domain/ports/driver/service/DeleteBiomeServicePort"
import BiomeRepositoryFactory from "../repository/BiomeRepositoryFactory"

export default class DeleteBiomeServiceFactory {

    public static readonly delete = (): DeleteBiomeServicePort  => {
        
        const repository = BiomeRepositoryFactory.delete()
        return new DeleteBiomeService(repository)
        
    }

}
