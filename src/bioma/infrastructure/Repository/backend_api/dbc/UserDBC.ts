import Database from "../../Database";

export default class UserDBC {
    public async createUser(user_name: string, email: string, password: string, name: string, pet_name: string,
        education: string, birthdate: Date, telephone: string, sex: string,
        occupation: string, time_played: number, questions_learned: number, received_xp: number,
        streak: string, last_date_added: Date, league: string): Promise<number> {
    try{
        await Database.getConnection();
        const query = "SELECT CreateUser(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
            user_name, email, password, name, pet_name,
            education, birthdate, telephone, sex, occupation,
            time_played, questions_learned, received_xp,
            streak, last_date_added, league
        ];
      const result = await Database.executeQuery(query, values);
      const key = Object.keys(result[0])[0];
      if (!key) {
        throw new Error("Error creating user");
      }
      return result[0][key];
    } catch (error: any) {
      if (error.code === "ER_DUP_ENTRY") throw error;
      throw new Error(`Error de base de datos: ${error.message}`);
    }
  }

    public async updateUserExperience(user_id: number, received_xp: number): Promise<number> {
    await Database.getConnection()
        const query = "select UpdateUserXP(?, ?)"
        const params = [user_id, received_xp]
        let res = await Database.executeQuery(query, params)
        res = res[0]
        const key = Object.keys(res)[0];
        if (!key) {
            throw new Error("Unexpected db result");
        }
        return res[key];
    }
}
