import { AbstractTheme } from "../../../model/theme/AbstractTheme";

export interface GetThemesUseCasePort {
    getAllThemes(): Promise<AbstractTheme[]>
}