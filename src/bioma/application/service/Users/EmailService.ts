import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: 'X:/Flutter/PI3/pi3_server_backend/env/.env' });

export class EmailService {
  private readonly emailUser: string;
  private readonly emailPass: string;
  private readonly transporter: nodemailer.Transporter;

  private static codes: { [email: string]: string } = {};

  // Aqui define el correo desde el cual se enviaran los correos 
  constructor() {
    this.emailUser = process.env['EMAIL_USER'] || '';
    this.emailPass = process.env['EMAIL_PASS'] || '';
    
    if (!this.emailUser || !this.emailPass) {
      throw new Error("Las credenciales de correo no están definidas en las variables de entorno");
    }

    this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: this.emailUser,
          pass: this.emailPass,
        },
      });      
  }

  // Genera el código de verificación
  public generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // Envía el correo electrónico al destinatario
  public async sendVerificationEmail(to: string): Promise<void> {
    let code = this.generateVerificationCode(); // Generar un nuevo código

    const mailOptions = {
      from: this.emailUser,
      to,
      subject: 'Código de Verificación',
      text: `Tu código de verificación es: ${code}`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      EmailService.codes[to] = code; // Guardar el código en la memoria
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      throw new Error("Error al enviar el correo electrónico");
    }
  }

  // Verifica el código
  public verifyCode(email: string, code: string): boolean {
    const storedCode = EmailService.codes[email];

    if (storedCode && storedCode === code) {
      delete EmailService.codes[email]; // Eliminar el código después de la verificación
      return true;
    }
    return false;
  }
}
