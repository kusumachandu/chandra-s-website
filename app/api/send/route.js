// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {

  const { body } = await req;
  const {email, subject, message} = body;

  console.log(typeof(email));

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["kusumachandu43@gmail.com", `${email}`],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contanting me!</p>
          <p>New message submitted;</p>
          <p>{message}</p>
        </>
      )
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
