import { GetThemesService } from "../../../application/service/Themes/GetThemesService";
import { GetThemeServicePort } from "../../../domain/ports/driver/service/GetThemesServicePort";
import ThemeRepositoryFactory from "../repository/ThemeRepositoryFactory";

export default class GetThemeServiceFactory {
    public static readonly create = (): GetThemeServicePort => {
        const repository = ThemeRepositoryFactory.create()

        return new GetThemesService(repository)
    }
}