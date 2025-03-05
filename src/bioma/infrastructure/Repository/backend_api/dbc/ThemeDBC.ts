import { ThemeDoc } from "../../../../domain/docs/ThemeDoc"
import Database from "../../Database"

export default class ThemeDBC {

    public async getThemeById(id_theme: number): Promise<any> {
        await Database.getConnection()
        const query = `select * from THEMES where id_theme = ${id_theme}`
        let res = await Database.executeQuery(query)
        return res[0]
    }

    public async getAllThemes(): Promise<ThemeDoc[]> {
        await Database.getConnection()
        const query = `SELECT * from THEMES`
        let result = await Database.executeQuery(query)
        return result as ThemeDoc[]
    }

}