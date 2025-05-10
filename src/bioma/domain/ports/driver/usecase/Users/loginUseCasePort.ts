import { AbstractUser } from "../../../../model/user/AbstractUser";

export default interface LoginUseCasePort {
    login(username: string, password: string): Promise<AbstractUser | null>;
}
