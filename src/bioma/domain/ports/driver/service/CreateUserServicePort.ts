import { AbstractUser } from "../../../model/user/AbstractUser";

export interface CreateUserServicePort {
    createUser( user: AbstractUser): Promise<number>
}