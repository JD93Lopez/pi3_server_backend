import { AbstractTheme } from "../../domain/model/theme/AbstractTheme";
import Theme from "../../domain/model/theme/Theme";
import { ThemeInterface } from "../../domain/types/ThemeInterface";

export default class ThemeHelper {

    endpointToDomainTheme(themeClient: ThemeInterface): AbstractTheme {
        return new Theme(
            themeClient.id_theme,
            themeClient.image,
        );
    }
}

