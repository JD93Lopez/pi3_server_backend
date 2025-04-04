import { EmailService } from "../bioma/application/service/Users/EmailService";


async function testEmail() {
  try {
    const emailService = new EmailService();
    const code = emailService.generateVerificationCode();
    await emailService.sendVerificationEmail('mariajoseromero2018@gmail.com', code);
    console.log('Correo de verificación enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
}

testEmail();
