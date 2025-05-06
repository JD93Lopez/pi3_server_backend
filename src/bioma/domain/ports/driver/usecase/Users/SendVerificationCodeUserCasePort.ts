export default interface SendVerificationCodeUserCasePort{
    execute(email: string): Promise<any>;
}