import { NextResponse } from "next/server";
import { sendEmail } from "@/app/lib/email";
import fetch from "node-fetch";

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  'error-codes'?: string[];
}

export async function POST(req: Request) {
  const { name, email, message, token } = await req.json();

  if (!name || !email || !message || !token) {
    return NextResponse.json(
      { error: "All fields and reCAPTCHA token are required" },
      { status: 400 }
    );
  }

  const recaptchaSecretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;
  const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`;

  try {
    const recaptchaRes = await fetch(recaptchaVerifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json() as RecaptchaResponse;

    if (!recaptchaData.success || (recaptchaData.score && recaptchaData.score < 0.5)) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    await sendEmail({ name, email, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "There was an error sending the message" },
      { status: 500 }
    );
  }
}