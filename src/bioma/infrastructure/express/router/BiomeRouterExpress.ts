import RouterExpress from "../../../../express/domain/RouterExpress";
import BiomeControllerExpressPort from "../../../domain/ports/driver/controller/BiomeControllerExpressPort";
import BiomeRouterExpressPort from "../../../domain/ports/driver/router/BiomeRouterExpressPort";

export default class BiomeRouterExpress extends RouterExpress implements BiomeRouterExpressPort {
  constructor(
    private readonly biomeController: BiomeControllerExpressPort
  ) {
    super()
    this.routes()
  }

  public routes = (): void => {
    this.getBiomeRoutes()
  }

  public getBiomeRoutes = (): void => {
    this.router.post(
      '/v1.0/biome/creation',
      this.biomeController.createBiome.bind(this.biomeController)
    ),
    this.router.put(
      '/v1.0/biome/update',
      this.biomeController.updateBiome.bind(this.biomeController)
    ),
    this.router.delete(
      '/v1.0/biome/deletion',
      this.biomeController.deleteBiome.bind(this.biomeController)
    ),
    this.router.post(
      '/v1.0/biome/user',
      this.biomeController.getBiomesByUser.bind(this.biomeController)
    )
  }
}