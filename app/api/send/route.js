import EmailTemplate from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {

  const body = await req.json();
  const {email, subject, message} = body;

  console.log(fromEmail);

  try {
    await resend.sendEmail({
      from: 'email@chandra.shekar.dev',
      to: 'kusumachandu17@gmail.com',
      subject: subject,
      react: EmailTemplate({ email, subject, message })
    });

    return NextResponse.json({
      status: 'Ok'
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
