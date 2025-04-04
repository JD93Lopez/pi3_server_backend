import { GetThemesUseCase } from "../../../../bioma/application/usecase/Themes/GetThemesUseCase";
import ThemeControllerExpress from "../../../../bioma/infrastructure/express/controller/ThemeControllerExpress";
import ThemeRouterExpress from "../../../../bioma/infrastructure/express/router/ThemeRouterExpress";
import GetThemeServiceFactory from "../../../../bioma/infrastructure/factory/service/Themes/GetThemeServiceFactory";
import RouterExpress from "../../../domain/RouterExpress";

export default class ThemeRouterFactory {
    
    public static readonly create = (): RouterExpress => {
        const getThemeService = GetThemeServiceFactory.create()
        const getThemeUseCase = new GetThemesUseCase(getThemeService)

        const themeController = new ThemeControllerExpress(getThemeUseCase)

        const themeRouter = new ThemeRouterExpress(themeController)

        return themeRouter
    }
}