import { AbstractUser } from "../../../domain/model/user/AbstractUser";
import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import CredentialValidationServicePort from "../../../domain/ports/driver/service/LoginServicePort";
import UserHelper from "../../helper/UserHelper";


export default class CredentialValidationService implements CredentialValidationServicePort {
    
  constructor(private userRepository: UserRepositoryPort) {}

  async validation(username: string, password: string): Promise<AbstractUser | false> {
    const userdb = await this.userRepository.findByUserName(username);
    const userHelper = new UserHelper();
    if (!userdb) {
      return false;
    }
    if (userdb.password !== password) {
      return false;      
    }
    const userDomain = userHelper.databaseToDomainUser(userdb);
    return userDomain;
  }
}