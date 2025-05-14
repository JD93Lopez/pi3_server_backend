 import RouterExpress from "../../../../express/domain/RouterExpress";
import { IconControllerExpressPort } from "../../../domain/ports/driver/controller/IconControllerExpress";
import { IconRouterExpressPort } from "../../../domain/ports/driver/router/IconRouterExpressPort";

export default class IconRouterExpress extends RouterExpress implements IconRouterExpressPort {
  constructor(private readonly iconController: IconControllerExpressPort) {
    super();
    this.routes();
  }

  public routes = (): void => {
    this.getIconRoutes();
  };

  public getIconRoutes = (): void => {
    this.router.get(
      "/icons",
      this.iconController.getAllIcons.bind(this.iconController)
    );
  };
}