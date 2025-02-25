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

    public async createFlashcard(flashcard_question: string, flashcard_answer: string, learned_status: boolean, topic_id: number): Promise<any> {
        await Database.getConnection()
        const query = `select CreateFlashcard(
            '${flashcard_question}', 
            '${flashcard_answer}', 
            ${learned_status}, 
            ${topic_id}
        )`
        let res = await Database.executeQuery(query)
        res = res[0]
        const key = Object.keys(res)[0];
        if(!key){
            throw new Error("Error creating flashcard")
        }
        return res[key];
    }
}