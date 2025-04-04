import { AbstractTheme } from "../../../../model/theme/AbstractTheme";

export interface GetThemeServicePort {
    getAllThemes: () => Promise<AbstractTheme[]>;
}