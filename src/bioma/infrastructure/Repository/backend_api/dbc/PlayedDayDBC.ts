import Database from "../../Database";

export default class PlayedDayDBC {

    public async createPlayedDay(date: Date, time_played: number, questions_learned: number, received_xp: number, USERS_id_user: number): Promise<any> {
      
        try {
            
            await Database.getConnection()
            const query = "select CreatePlayedDay(?, ?, ?, ?, ?)"
            const values = [date, time_played, questions_learned, received_xp, USERS_id_user]
            const result = await Database.executeQuery(query, values);
            const key = Object.keys(result[0])[0];
            
            if(!key){
                throw new Error("Error creating flashcard")
            }

            return result[0][key];
        } catch (error: any) {
            if (error.code === 'ER_DUP_ENTRY') throw error;
            throw new Error(`Error de base de datos: ${error.message}`);
        }
    }
}