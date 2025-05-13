import Database from "../../Database"

export default class FlashcardDBC {
    public async getFlashcards(): Promise<any> {
        await Database.getConnection()
        const query = `select * from FLASHCARDS`
        return await Database.executeQuery(query)
    }

    public async getFlashcardsByTopic(id_topic: number): Promise<any> {
        try {
            await Database.getConnection()
            const query = `call GetFlashcardsByTopic(${id_topic})`
            const res = await Database.executeQuery(query)
            return res[0]
        } catch (error) {            
            // throw new Error("Error getting flashcards by topic from database")
            console.log(error);
            return []

            
        }
    }

    public async createFlashcard(flashcard_question: string, flashcard_answer: string, learned_status: boolean, topic_id: number): Promise<any> {
        await Database.getConnection()
        const query = "select CreateFlashcard(?, ?, ?, ?)"
        const values = [flashcard_question, flashcard_answer, learned_status, topic_id]
        let res = await Database.executeQuery(query, values)
        res = res[0]
        const key = Object.keys(res)[0];
        if(!key){
            throw new Error("Error creating flashcard in database")
        }
        return res[key];
    }

    public async updateFlashcard(flashcard_id: number, learned_status: boolean, last_date: string): Promise<any> {
        await Database.getConnection()
        const query = "select UpdateFlashcardLearned(?, ?, ?)"
        const values = [flashcard_id, learned_status, last_date]
        let res = await Database.executeQuery(query, values)
        res = res[0]
        const key = Object.keys(res)[0];
        if(!key){
            throw new Error("Error updating flashcard")
        }
        return res[key];
    }

    public async getFlashcardsByBiome(biome_id: number): Promise<any> {

        try {
            await Database.getConnection();
            const query = `call GetFlashcardsByBiome(${biome_id})`;
            const res = await Database.executeQuery(query);
            
            // Verifica si hay resultados y maneja el caso en que no haya
            if (!res || res.length === 0) {
                throw new Error(`No flashcards found for biome id ${biome_id}`);
            }

            return res[0];
        } catch (error: any) {
            if (error.code === 'ER_SP_DOES_NOT_EXIST') {
                console.error("Stored procedure not found:", error);
                // throw new Error(`Stored procedure GetFlashcardsByBiome does not exist.`);
            }

            console.error("Error getting flashcards by biome:", error);
            // throw new Error("Error getting flashcards by biome from database.");
            return [];
        }

    }
}