import { EmailService } from "../bioma/application/service/Users/EmailService";


async function testEmail() {
  try {
    const emailService = new EmailService();
    await emailService.sendVerificationEmail('mariajoseromero2018@gmail.com');
    console.log('Correo de verificación enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
}

testEmail();
