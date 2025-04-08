import nodemailer from "nodemailer";

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailParams) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "nohiriavg@gmail.com",
    subject: `New message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  await transporter.sendMail(mailOptions);
}