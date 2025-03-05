import { ThemeDoc } from "../../docs/ThemeDoc";

export default interface ThemeRepositoryPort {
    getThemeImageById(id_theme: number): Promise<string>;
    getAllThemes(): Promise<ThemeDoc[]>;
}