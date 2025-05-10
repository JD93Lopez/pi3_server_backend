export default interface JWTUseCasePort{
    singJWT(userId: number, username: string): Promise<any>;
    validateToken(token: string): Promise<boolean>;
}