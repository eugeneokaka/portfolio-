// app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "../../../../email/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "contact@mail.eugenecode.xyz", // change after domain setup
      to: "eugeneokaka@gmail.com", // replace with your real email
      replyTo: email,
      subject: `New message from ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
