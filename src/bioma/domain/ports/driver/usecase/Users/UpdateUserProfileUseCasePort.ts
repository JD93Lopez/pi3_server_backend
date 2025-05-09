import { UserInterface } from "../../../../types/UserInterface";

export default interface UpdateUserProfileUseCasePort {
    updateUserProfile(user: UserInterface): Promise<boolean>;
}