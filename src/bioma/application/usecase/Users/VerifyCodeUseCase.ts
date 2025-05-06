import VerifyCodeUseCasePort from "../../../domain/ports/driver/usecase/Users/VerifyCodeUseCasePort";
import { EmailService } from "../../service/Users/EmailService";

export default class VerifyCodeUseCase implements VerifyCodeUseCasePort {
    
    constructor(private emailService: EmailService) {}

    async verifyCode(email: string, code: string): Promise<boolean> {
        try {
            const isValid = this.emailService.verifyCode(email, code);
            return isValid;
        } catch (error) {
            console.error("Error verifying code:", error);
            return false; // or handle the error as needed
        }
    }
}