import { transporter } from '../config/nodemailer.js';

/**
 * Envia um e-mail de confirmação para o usuário
 * @param {string} email - Endereço de e-mail do usuário
 * @param {string} name - Nome do usuário
 */
export const sendConfirmationEmail = async (email, name) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Sua conta foi criada no VacinePET!',
      html: `
        <h2>Olá, ${name}!</h2>
        <p>Obrigado por se cadastrar no VacinePET. Sua contá já está disponível para realização de login em nossa plataforma.</p>
        <p>Se você não se cadastrou, ignore este e-mail.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`E-mail de confirmação enviado para ${email}`);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
  }
};