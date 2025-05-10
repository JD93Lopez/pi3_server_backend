import UpdateUserProfileServicePort from "../../../domain/ports/driver/service/Users/UpdateUserProfileServicePort";
import UpdateUserProfileUseCasePort from "../../../domain/ports/driver/usecase/Users/UpdateUserProfileUseCasePort";
import { UserInterface } from "../../../domain/types/UserInterface";
import UserHelper from "../../helper/UserHelper";

export default class UpdateProfileUseCase implements UpdateUserProfileUseCasePort {

    constructor(private updateProfileService: UpdateUserProfileServicePort) {}

    async updateUserProfile(userClient: UserInterface): Promise<boolean> {
        try {
            const userHelper = new UserHelper()
            const user = userHelper.endpointToDomainUser(userClient)

            const result = await this.updateProfileService.updateUser(user);
            return result;
        } catch (error) {
            console.error("Error updating user profile:", error);
            return false;
        }
    }
}