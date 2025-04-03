import { AbstractUser } from "../../../../model/user/AbstractUser";

export default interface CredentialValidationServicePort {
  validation(username: string, password: string): Promise<AbstractUser | false>;
}
