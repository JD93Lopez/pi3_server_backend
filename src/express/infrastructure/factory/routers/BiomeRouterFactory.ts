import CreateBiomeUseCase from "../../../../bioma/application/usecase/Biomes/CreateBiomeUseCase";
import BiomeControllerExpress from "../../../../bioma/infrastructure/express/controller/BiomeControllerExpress";
import BiomeRouterExpress from "../../../../bioma/infrastructure/express/router/BiomeRouterExpress";
import CreateBiomeServiceFactory from "../../../../bioma/infrastructure/factory/service/CreateBiomeServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"

export default class BiomeRouterFactory {

    public static readonly create = (): RouterExpress => {
        
        // --------- CREATE BIOME  ----------------
        const biomeCreateService =  CreateBiomeServiceFactory.create()
        const biomeCreateUseCase = new CreateBiomeUseCase(biomeCreateService);

        const biomeController = new BiomeControllerExpress(biomeCreateUseCase);
        const biomeRouter = new BiomeRouterExpress(biomeController);

        return  biomeRouter;
    
    }

}