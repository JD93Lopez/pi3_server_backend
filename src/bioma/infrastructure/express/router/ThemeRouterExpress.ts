import RouterExpress from "../../../../express/domain/RouterExpress";
import { ThemeControllerExpressPort } from "../../../domain/ports/driver/controller/ThemeControllerExpress";
import { ThemeRouterExpressPort } from "../../../domain/ports/driver/router/ThemeRouterExpressPort";

export default class ThemeRouterExpress extends RouterExpress implements ThemeRouterExpressPort {
  constructor(private readonly themeController: ThemeControllerExpressPort) {
    super();
    this.routes();
  }

  public routes = (): void => {
    this.getThemeRoutes();
  };

  public getThemeRoutes = (): void => {
    this.router.get(
      "/v1.0/themes",
      this.themeController.getAllThemes.bind(this.themeController)
    );
  };
}