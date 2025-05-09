import { UserDoc } from "../../../domain/docs/UserDoc";
import { AbstractUser } from "../../../domain/model/user/AbstractUser";
import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import UpdateUserProfileServicePort from "../../../domain/ports/driver/service/Users/UpdateUserProfileServicePort";

export default class UpdateProfileService implements UpdateUserProfileServicePort{

    constructor(private userRepo: UserRepositoryPort) {}

    async updateUser(user: AbstractUser): Promise<boolean> {

        try {
            const userDoc: UserDoc = {
                id_user: -1,
                password: user.getPassword(),
                user_name: user.getUserName(),
                email: user.getEmail(),
                name: user.getName(),
                pet_name: user.getPetName(),
                education: user.getEducation(),
                birthdate: user.getBirthdate(),
                telephone: user.getTelephone(),
                sex: user.getSex(),
                occupation: user.getOccupation(),
                time_played: 0,
                questions_learned: 0,
                received_xp: 0,
                streak: '',
                last_date_added: new Date(),
                league: ''
            };
            
            return await this.userRepo.updateProfile(userDoc);
        } catch (error) {
            console.error("Error updating user profile:", error);
            return false
        }
    }

    
}