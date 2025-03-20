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
}