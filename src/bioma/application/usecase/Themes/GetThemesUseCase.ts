import { AbstractTheme } from "../../../domain/model/theme/AbstractTheme";
import { GetThemeServicePort } from "../../../domain/ports/driver/service/Theme/GetThemesServicePort";
import { GetThemesUseCasePort } from "../../../domain/ports/driver/usecase/Themes/GetThemesUseCasePort";

export class GetThemesUseCase implements GetThemesUseCasePort {

  constructor(
    private getThemesService: GetThemeServicePort
  ) {}
  async getAllThemes(): Promise<AbstractTheme[]> {
    const themes = await this.getThemesService.getAllThemes();
    return themes;
  }
}