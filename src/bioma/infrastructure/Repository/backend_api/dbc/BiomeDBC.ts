import { BiomeDoc } from "../../../../domain/docs/BiomeDoc"
import Database from "../../Database"

export default class BiomeDBC {

    public async createBiome(name: string, THEMES_id_theme: number, USERS_id_user: number): Promise<any> {
        await Database.getConnection()

        const query = "select CreateBiome(?, ?, ?)"
        const values = [name, THEMES_id_theme, USERS_id_user]
        let res = await Database.executeQuery(query, values)
        res = res[0]
        const key = Object.keys(res)[0];
        if(!key){
            throw new Error("Error creating biome")
        }
        return res[key];
    }

    public async getBiomesByUserId(userId: number): Promise<BiomeDoc[]> {
        await Database.getConnection()
        const query = "call GetBiomesByUserId(?)"
        const values = [userId]
        let res = await Database.executeQuery(query, values)
        res = res[0]
        return res;
    }


    
}