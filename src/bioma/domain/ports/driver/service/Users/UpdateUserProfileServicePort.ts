import { AbstractUser } from "../../../../model/user/AbstractUser";

export default interface UpdateUserProfileServicePort {
    updateUser( user: AbstractUser): Promise<boolean>
}
