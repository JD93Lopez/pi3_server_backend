export default interface CheckUserExistsUseCasePort {
    checkUserExists(user_name: string): Promise<number>;
}