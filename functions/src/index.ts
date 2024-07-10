import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as postmark from "postmark";
import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(cors({ origin: true }));

admin.initializeApp();

const postmarkClient = new postmark.ServerClient(
  "732a3ccc-ce12-47b6-845a-7469ea8d7b04"
);

export const sendEmail = functions.https.onCall(async (data) => {
  const { subject, message } = data;

  try {
    const result = await postmarkClient.sendEmail({
      From: "haritha@hivekind.com",
      To: "haritha@hivekind.com",
      Subject: subject,
      HtmlBody: message,
    });

    return { success: true, result };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
});
