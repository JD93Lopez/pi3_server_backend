import { UserDoc } from "../../docs/UserDoc";

export interface UserRepositoryPort {
    updateUserXp(user_id: number, received_xp: number): Promise<number>
    save (user: UserDoc): Promise<number>
    UpdateUserStreak(user_id: number): Promise<void>
    getUserStreak(user_id: number): Promise<number>
    getDaysSinceLastXPActivity(user_id: number): Promise<any>
    findByUserName(username: string): Promise<UserDoc>
    updateUserLeague(user_id: number, league: string): Promise<number>
    deleteUserById(id: number): Promise<number>
    getTotalBalance(user_id: number): Promise<number>
    getRank(user_id: number): Promise<string>
}
