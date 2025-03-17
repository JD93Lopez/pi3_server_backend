import { log } from "console";
import Database from "../../Database";

export default class PlayedDayDBC {

    public async createPlayedDay(played_date: Date, time_played: number, questions_learned: number, received_xp: number, USERS_id_user: number): Promise<any> {
      
        console.log("played_date:", played_date)
        console.log("time_played:", time_played)
        console.log("questions_learned:", questions_learned)
        console.log("received_xp:", received_xp)
        console.log("USERS_id_user:", USERS_id_user)
        
        // try {
            console.log("llegó al CreatePlayedDay x1");
            
            await Database.getConnection()
            const query = "select CreatePlayedDay(?, ?, ?, ?, ?)"
            const values = [played_date, time_played, questions_learned, received_xp, USERS_id_user]
            const result = await Database.executeQuery(query, values);
            const key = Object.keys(result[0])[0];
            

            if(!key){
                throw new Error("Error creating flashcard")
                log("llegó al createPlayedDay x2")
            }

            log("llegó al createPlayedDay x3")
            log("llegó al createPlayedDay x4 ->>> ", result[0][key])
            return result[0][key];
        // } catch (error: any) {
        //     if (error.code === 'ER_DUP_ENTRY') throw error;
        //     throw new Error(`Error de base de datos: ${error.message}`);
        // }
    }

    public async updatePlayedDay(date: Date, time_played: number, questions_learned: number, received_xp: number, USERS_id_user: number): Promise<any> {
        
            // try {
                console.log("llegó al updatePlayedDay")    
            await Database.getConnection()
                const query = "select UpdatePlayedDayFunction(?, ?, ?, ?, ?)"
                const values = [date, USERS_id_user, time_played, questions_learned, received_xp]
                const result = await Database.executeQuery(query, values);
                const key = Object.keys(result[0])[0];
                
                if(!key){
                    throw new Error("Error updating flashcard")
                    console.log("llegó al updatePlayedDay x2") 
                }
                console.log("llegó al updatePlayedDay x3") 
    
                console.log("llegó al updatePlayedDay x4 ->>> ", result[0][key]) 

                return result[0][key];
            // } catch (error: any) {
            //     if (error.code === 'ER_DUP_ENTRY') throw error;
            //     throw new Error(`Error de base de datos: ${error.message}`);
            // }
    }
}