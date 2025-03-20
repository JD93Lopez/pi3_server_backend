import { UserDoc } from "../../docs/UserDoc";

export interface UserRepositoryPort {
    save (user: UserDoc): Promise<number>
}