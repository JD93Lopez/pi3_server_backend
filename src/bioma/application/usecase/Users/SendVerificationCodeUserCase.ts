import SendVerificationCodeUserCasePort from "../../../domain/ports/driver/usecase/Users/SendVerificationCodeUserCasePort";
import { EmailService } from "../../service/Users/EmailService";

export default class SendVerificationCodeUserCase implements SendVerificationCodeUserCasePort{

    constructor(private emailService: EmailService) {}

    //Recibe el email y lo manda al servicio de email para que envie el codigo de verificacion
    async execute(email: string): Promise<any> {
        try {
            await this.emailService.sendVerificationEmail(email);
            return true;
        } catch (error) {
            console.error("Error sending verification code:", error);
            return false;
        }
    }
}