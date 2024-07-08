import { client } from "@/postmark";

export async function POST(request) {
    const res = await request.json();
    const { subject, message } = res;

    client.sendEmail({
        "From": process.env.CONTACT_FORM_RECEIVING_EMAIL,
        "To": process.env.CONTACT_FORM_RECEIVING_EMAIL,
        "Subject": subject,
        "TextBody": message,
    });

    return Response.json({res});
}
