
export interface UserRepositoryPort {
    updateUserXp(user_id: number, received_xp: number): Promise<number>
}
