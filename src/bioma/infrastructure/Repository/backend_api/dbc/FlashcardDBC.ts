import Database from "../../Database"

export default class FlashcardDBC {
    public async getFlashcards(): Promise<any> {
        await Database.getConnection()
        const query = `select * from FLASHCARDS`
        return await Database.executeQuery(query)
    }
}