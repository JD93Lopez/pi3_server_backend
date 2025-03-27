import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import UserDBC from "./dbc/UserDBC";

export default class UserRepository implements UserRepositoryPort {
   private readonly userDBC: UserDBC
 
   constructor() {
     this.userDBC = new UserDBC()
   }
 
    async updateUserXp(user_id: number, received_xp: number): Promise<number> {
        const result = await this.userDBC.updateUserExperience(user_id, received_xp);
        return result;
    }

    async UpdateUserStreak(user_id: number): Promise<void> {
        await this.userDBC.UpdateUserStreak(user_id);
    }

    async getUserStreak(user_id: number): Promise<number> {
        const result = await this.userDBC.getUserStreak(user_id);
        return result;
    }

}