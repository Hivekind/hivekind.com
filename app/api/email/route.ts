import { client } from "@/postmark";

export async function POST(request: any) {
  const res = await request.json();
  const { subject, message } = res;

  client.sendEmail({
    "From": String(process.env.CONTACT_FORM_RECEIVING_EMAIL),
    "To": String(process.env.CONTACT_FORM_RECEIVING_EMAIL),
    "Subject": String(subject),
    "TextBody": String(message),
  });

  return Response.json({res});
}
