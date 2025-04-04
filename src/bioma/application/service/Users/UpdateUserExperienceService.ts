import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import UpdateUserExperienceServicePort from "../../../domain/ports/driver/service/Users/UpdateUserExperienceServicePort";

export default class UpdateUserExperienceService implements UpdateUserExperienceServicePort {

    constructor( private  userRepository : UserRepositoryPort){}

    async updateUserXP(userId: number, experience: number): Promise<number> {
        const result = await this.userRepository.updateUserXp(userId, experience);
        return result;
    }

}