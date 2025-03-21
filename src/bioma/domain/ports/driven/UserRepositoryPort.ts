
export interface UserRepositoryPort {
    updateUserXp(user_id: number, received_xp: number): Promise<number>
    UpdateUserStreak(user_id: number): Promise<void>
    getUserStreak(user_id: number): Promise<number>
}
