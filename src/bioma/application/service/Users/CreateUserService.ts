import { UserDoc } from "../../../domain/docs/UserDoc";
import { AbstractUser } from "../../../domain/model/user/AbstractUser";
import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import { CreateUserServicePort } from "../../../domain/ports/driver/service/CreateUserServicePort";

export class CreateUserService implements CreateUserServicePort{
    constructor(private userRepository: UserRepositoryPort){}

    async createUser(user: AbstractUser): Promise<number>{
        const userDoc: UserDoc = {
            id_user: -1,
            user_name: user.getUserName(),
            email: user.getEmail(),
            password: user.getPassword(),
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
        }
        const idSavedUser = await this.userRepository.save(userDoc)
        return idSavedUser;
    }
}