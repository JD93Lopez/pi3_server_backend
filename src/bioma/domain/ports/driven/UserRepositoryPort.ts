import { UserDoc } from "../../docs/UserDoc";

export interface UserRepositoryPort {
    updateUserXp(user_id: number, received_xp: number): Promise<number>
    save (user: UserDoc): Promise<number>
}