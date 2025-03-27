import Database from "../../Database";

export default class UserDBC {

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

    public async UpdateUserStreak(user_id: number): Promise<void> {
        try {
            await Database.getConnection();
            const query = "CALL UpdateUserStreak(?)";
            const params = [user_id];
        
            await Database.executeQuery(query, params);
            
        } catch (error) {
            console.error("Error al actualizar la racha:", error);
            throw new Error("No se pudo actualizar la racha");
        }
    }

    public async getUserStreak(user_id: number): Promise<number> {
        await Database.getConnection()
        const query = "SELECT streak FROM USERS WHERE id_user = (?)"
        const params = [user_id]
        let res = await Database.executeQuery(query, params)
        res = res[0]
        const key = Object.keys(res)[0];
        if (!key) {
            throw new Error("Unexpected db result");
        }
        return res[key];
    }
}

