import Database from "../../Database"

export default class TopicDBC {
    public async createTopic(topic_name: String, topic_description: String, icon_id: number, biome_id: number ): Promise<any> {
        await Database.getConnection()
        const query = `select CreateTopic(${topic_name}, ${topic_description}, ${icon_id}, ${biome_id})`
        const res = await Database.executeQuery(query)
        return res
    }
}