export default interface GetPlayedDaysByDateUseCasePort {
    GetPlayedDaysByDateUseCase(USERS_id_user: number, date: string): Promise<number>;
}