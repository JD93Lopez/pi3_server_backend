import { PlayedDayDoc } from "../../../../domain/docs/PlayedDaysDoc";
import Database from "../../Database";

export default class PlayedDayDBC {

    public async createPlayedDay(played_date: Date, time_played: number, questions_learned: number, received_xp: number, USERS_id_user: number): Promise<any> {
      

        // try {
            
            await Database.getConnection()
            const query = "select CreatePlayedDay(?, ?, ?, ?, ?)"
            const values = [played_date, time_played, questions_learned, received_xp, USERS_id_user]
            const result = await Database.executeQuery(query, values);
            const key = Object.keys(result[0])[0];
            

            if(!key){
                throw new Error("Error creating flashcard")
            }

            return result[0][key];

    }

    public async updatePlayedDay(date: Date, time_played: number, questions_learned: number, received_xp: number, USERS_id_user: number): Promise<any> {
        
            await Database.getConnection()
                const query = "select UpdatePlayedDayFunction(?, ?, ?, ?, ?)"
                const values = [date, USERS_id_user, time_played, questions_learned, received_xp]
                const result = await Database.executeQuery(query, values);
                const key = Object.keys(result[0])[0];
                
                if(!key){
                    throw new Error("Error updating flashcard")
                }

                return result[0][key];
    }

    public async getPlayedDayByUserId(USERS_id_user: number): Promise<PlayedDayDoc[]> {
        await Database.getConnection();
        const query = "CALL GetLast31Days(?)";  
        const values = [USERS_id_user];
        const result = await Database.executeQuery(query, values);
    
        if (!result || result.length === 0 || !result[0]) {
            throw new Error("No data found for the user");
        }
    
        return result[0];
    }
    


}