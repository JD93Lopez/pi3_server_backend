import { AbstractUser } from "../../../domain/model/user/AbstractUser";
import { UserRepositoryPort } from "../../../domain/ports/driven/UserRepositoryPort";
import CredentialValidationServicePort from "../../../domain/ports/driver/service/Users/LoginServicePort";
import UserHelper from "../../helper/UserHelper";
import bcrypt from 'bcrypt';  

export default class CredentialValidationService implements CredentialValidationServicePort {
    
  constructor(private userRepository: UserRepositoryPort) {}

  async validation(username: string, password: string): Promise<AbstractUser | false> {
    const userdb = await this.userRepository.findByUserName(username);
    const userHelper = new UserHelper();
    if (!userdb) {
      return false;
    }
    const isMatch = await bcrypt.compare(password, userdb.password);
    if (!isMatch) {
      return false;
    }
    const userDomain = userHelper.databaseToDomainUser(userdb);
    return userDomain;
  }
}
