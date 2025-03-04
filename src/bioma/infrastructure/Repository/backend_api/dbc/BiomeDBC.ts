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

    public async getBiomesByUserId(userId: number): Promise<any> {
        await Database.getConnection()
        const query = `select * from GetBiomesByUserId(${userId})`
        const res = await Database.executeQuery(query)
        return res
    }
    
    public async updateBiome(idBiome: number, newName: string, newThemeId: number): Promise<number> {
        await Database.getConnection();
    
        const query = "SELECT UpdateBiomeName(?, ?, ?) AS updatedBiomeId";
        const values = [idBiome, newName, newThemeId];
    
        try {
            const result = await Database.executeQuery(query, values);
    
            const updatedBiomeId = result[0]?.updatedBiomeId;
    
            if (updatedBiomeId === -1) {
                throw new Error("Error updating biome. Biome ID may not exist.");
            }
    
            return updatedBiomeId;
        } catch (error) {
            console.error("Error in updateBiome:", error);
            throw new Error("Failed to update biome.");
        }
    }
}