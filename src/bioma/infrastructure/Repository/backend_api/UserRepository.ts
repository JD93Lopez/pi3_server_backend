import { UserDoc } from "../../../domain/docs/UserDoc";
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
    async save(user: UserDoc): Promise<number> {
        const idUserFromDBC = await this.userDBC.createUser(user.user_name, user.email, user.password, user.name, user.pet_name, user.education, user.birthdate, user.telephone, user.sex, user.occupation, user.time_played, user.questions_learned, user.received_xp, user.streak, user.last_date_added, user.league);
        return idUserFromDBC
    }

    async UpdateUserStreak(user_id: number): Promise<void> {
        await this.userDBC.UpdateUserStreak(user_id);
    }

    async getUserStreak(user_id: number): Promise<number> {
        const result = await this.userDBC.getUserStreak(user_id);
        return result;
    }

    async findByUserName(username: string): Promise<UserDoc> {
        const user = await this.userDBC.getUserByUserName(username);
        const userDBC : UserDoc = {
            id_user: user.id_user,
            user_name: user.user_name,
            email: user.email,
            password: user.password,
            name: user.name,
            pet_name: user.pet_name,
            education: user.education,
            birthdate: user.birthdate,
            telephone: user.telephone,
            sex: user.sex,
            occupation: user.occupation,
            time_played: user.time_played,
            questions_learned: user.questions_learned,
            received_xp: user.received_xp,
            streak: user.streak,
            last_date_added: user.last_date_added,
            league: user.league,
        }

        return userDBC;
    }

    async updateUserLeague(user_id: number, league: string): Promise<number> {
        const result = await this.userDBC.updateUserLeague(user_id, league);
        return result;
    }

    async deleteUserById(id: number): Promise<number> {
        const deleted = await this.userDBC.deleteUserById(id)
        return deleted
    }

    async getTotalBalance(user_id: number): Promise<number> {
        const result = await this.userDBC.getTotalBalance(user_id);
        return result;
    }   

    async getRank(user_id: number): Promise<string> {
        return await this.userDBC.getRank(user_id);
    }

    async getDaysSinceLastXPActivity(user_id: number): Promise<any> {
        const result = await this.userDBC.getDaysSinceLastXPActivity(user_id);
        return result;
    }

    async saveSelectedItem(user_id: number, id_item: number): Promise<number> {
        return await this.userDBC.saveSelectedItem(user_id, id_item);
    }


    async getSelectedItem(user_id: number): Promise<string> {
        const result = await this.userDBC.getSelectedItem(user_id);
        return result;
    }

    async updateProfile(user: UserDoc): Promise<boolean> {
        const result = await this.userDBC.updateProfile(user);
        return result;
    }

    async updatePetName(user_id: number, pet_name: string): Promise<void> {
        await this.userDBC.updatePetName(user_id, pet_name);
    }
}