import { AbstractTheme } from "../../../domain/model/theme/AbstractTheme";
import ThemeRepositoryPort from "../../../domain/ports/driven/ThemeRepositoryPort";
import { GetThemeServicePort } from "../../../domain/ports/driver/service/GetThemesServicePort";
import ThemeHelper from "../../helper/ThemeHelper";

export class GetThemesService implements GetThemeServicePort {

  constructor(private themeRepository: ThemeRepositoryPort) {}

  async getAllThemes(): Promise<AbstractTheme[]> {
    const themeHelper = new ThemeHelper();

    const themes = await this.themeRepository.getAllThemes();

    const abstractThemes = themes.map(async (theme) => {
      return await themeHelper.endpointToDomainTheme(theme);
    });

    return await Promise.all(abstractThemes);
  }
}