export default interface GetPlayedDaysByDateServicePort {

    getPlayedDaysByDate(USERS_id_user: number, date: Date): Promise<any>;
}