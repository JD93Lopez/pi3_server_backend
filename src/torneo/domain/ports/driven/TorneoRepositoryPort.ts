export interface TorneoRepositoryPort {
    getTime(user_id: number): Promise<number>;
}