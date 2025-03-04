import ThemeRepositoryPort from "../../../domain/ports/driven/ThemeRepositoryPort";
import ThemeDBC from "./dbc/ThemeDBC";

export default class themeRepository implements ThemeRepositoryPort{
    private readonly themeDBC: ThemeDBC;

    constructor() {
        this.themeDBC = new ThemeDBC();
    }


    async getThemeImageById(id_theme: number): Promise<string> {
        try {
            const themedbc = await this.themeDBC.getThemeById(id_theme);
            const theme = themedbc["image"];
            
            if (!themedbc) {
                throw new Error(`Theme with id ${id_theme} not found`);
            }
            return theme;
            
        } catch (error) {
            throw new Error(`Error fetching theme by id: ${error}`);
        }
    }


}