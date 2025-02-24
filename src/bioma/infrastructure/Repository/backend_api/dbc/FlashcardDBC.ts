import Database from "../../Database"

export default class FlashcardDBC {
    public async getFlashcards(): Promise<any> {
        await Database.getConnection()
        const query = `select * from FLASHCARDS`
        return await Database.executeQuery(query)
    }

    public async getFlashcardsByTopic(id_topic: number): Promise<any> {
        await Database.getConnection()
        const query = `call GetFlashcardsByTopic(${id_topic})`
        const res = await Database.executeQuery(query)
        return res[0]
    }
}