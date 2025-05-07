export default interface VerifyCodeUseCasePort {
    verifyCode(email: string, code: string): Promise<boolean>;
}