import { GetIconsUseCase } from "../../../../bioma/application/usecase/Icons/GetIconsUseCase";
import IconControllerExpress from "../../../../bioma/infrastructure/express/controller/IconControllerExpress";
import IconRouterExpress from "../../../../bioma/infrastructure/express/router/IconRouterExpress";
import GetIconsServiceFactory from "../../../../bioma/infrastructure/factory/service/Icons/GetIconsServiceFactory";
import RouterExpress from "../../../domain/RouterExpress";


export default class IconRouterFactory {
  public static readonly get = (): RouterExpress => {
    // --------- GET ICONS ----------------
    const getIconsService = GetIconsServiceFactory.get();
    const getIconsUseCase = new GetIconsUseCase(getIconsService);

    const iconController = new IconControllerExpress(getIconsUseCase);

    const iconRouter = new IconRouterExpress(iconController);

    return iconRouter;
  };
}