import CreateBiomeUseCase from "../../../../bioma/application/usecase/Biomes/CreateBiomeUseCase";
import DeleteBiomeUseCase from "../../../../bioma/application/usecase/Biomes/DeleteBiomeUseCase";
import UpdateBiomeUseCase from "../../../../bioma/application/usecase/Biomes/UpdateBiomeUseCase";
import GetBiomesByUserUseCase from "../../../../bioma/application/usecase/Biomes/GetBiomesByUserUseCase";
import BiomeControllerExpress from "../../../../bioma/infrastructure/express/controller/BiomeControllerExpress";
import BiomeRouterExpress from "../../../../bioma/infrastructure/express/router/BiomeRouterExpress";
import BiomesByUserRetriverServiceFactory from "../../../../bioma/infrastructure/factory/service/BiomesByUserRetriverServiceFactory";
import CreateBiomeServiceFactory from "../../../../bioma/infrastructure/factory/service/CreateBiomeServiceFactory"
import DeleteBiomeServiceFactory from "../../../../bioma/infrastructure/factory/service/DeleteBiomeServiceFactory";
import UpdateBiomeServiceFactory from "../../../../bioma/infrastructure/factory/service/UpdateBiomeServiceFactory";
import RouterExpress from "../../../domain/RouterExpress"

export default class BiomeRouterFactory {

    public static readonly create = (): RouterExpress => {
        
        // --------- CREATE BIOME  ----------------
        const biomeCreateService =  CreateBiomeServiceFactory.create()
        const biomeCreateUseCase = new CreateBiomeUseCase(biomeCreateService);
      
        // --------- UPDATE BIOME ----------------
        const biomeUpdateService =  UpdateBiomeServiceFactory.update()
        const biomeUpdateUseCase = new UpdateBiomeUseCase(biomeUpdateService);

        // --------- DELETE BIOME ----------------
        const biomeDeleteService =  DeleteBiomeServiceFactory.delete()
        const biomeDeleteUseCase = new DeleteBiomeUseCase(biomeDeleteService);

        const biomeController = new BiomeControllerExpress(biomeCreateUseCase, biomeUpdateUseCase, biomeDeleteUseCase);
        // --------- GET BIOMES BY USER ----------------
        const biomeGetByUserService =  BiomesByUserRetriverServiceFactory.create()
        const biomeGetByUserUseCase = new GetBiomesByUserUseCase(biomeGetByUserService);

        const biomeController = new BiomeControllerExpress(biomeCreateUseCase, biomeGetByUserUseCase);
        const biomeRouter = new BiomeRouterExpress(biomeController);

        return  biomeRouter;
    
    }

}