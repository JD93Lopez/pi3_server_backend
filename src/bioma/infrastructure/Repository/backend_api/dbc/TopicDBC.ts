import Database from "../../Database"

export default class TopicDBC {
    public async createTopic(topic_name: String, topic_description: String, icon_id: number, biome_id: number ): Promise<any> {
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
    }
}