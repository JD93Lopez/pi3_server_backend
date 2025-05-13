import Database from "../../Database"

export default class TopicDBC {
    public async createTopic(topic_name: String, topic_description: String, icon_id: number, biome_id: number ): Promise<any> {
        try {
            await Database.getConnection()
            const query = `select CreateTopic(
            '${topic_name}', 
            '${topic_description}', 
            ${icon_id}, 
            ${biome_id}
            )`
            let res = await Database.executeQuery(query)
            res = res[0]
            const key = Object.keys(res)[0];
            if (!key) {
                throw new Error("Unexpected db result");
            }
            return res[key];
        } catch (error:any) {
            // console.error("Error in createTopic:", error);
            console.log("Error in createTopic:", error.message, "biome_id:", biome_id);
            return -1;
        }
    }

    public async getTopicsByBiome(biome_id: number): Promise<any> {
        try {
            await Database.getConnection()
            const query = `call GetTopicsByBiome(${biome_id})`
            let res = await Database.executeQuery(query)
            return res[0]
        } catch (error) {
            console.error("Error in getTopicsByBiome:", error)
            return []
        }
    }

    public async deleteTopicById(topic_id: number): Promise<any> {
        await Database.getConnection()
        const query = "select DeleteTopicAndFlashcards(?)"
        const params = [topic_id]
        let res = await Database.executeQuery(query, params)

        const key = Object.keys(res[0])[0]; // Obtiene la clave dinámica (ej: "DeleteTopicAndFlashcards(?)")
        if (!key) {
            throw new Error("Unexpected db result");
        }

        return res[0][key] as number; // Retorna solo el número
    }

    public async updateTopic(topic_id: number, topic_name: String, icon_id: number): Promise<any> {
        await Database.getConnection()
        const query = "select UpdateTopicName(?, ?, ?)"
        const params = [topic_id, topic_name, icon_id]
        let res = await Database.executeQuery(query, params)
        res = res[0]
        const key = Object.keys(res)[0];
        if (!key) {
            throw new Error("Unexpected db result");
        }
        return res[key];
    }

}