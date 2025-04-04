import { UserInterface } from "../../../../types/UserInterface";

export interface CreateUserUseCasePort {
    createUser(user: UserInterface): Promise<number>
}