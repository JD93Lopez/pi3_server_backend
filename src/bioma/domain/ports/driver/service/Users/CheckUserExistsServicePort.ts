export interface CheckUserExistsServicePort {
    checkUserExists(user_name: string): Promise<number>;
}