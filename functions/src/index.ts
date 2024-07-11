const express = require("express");
const cors = require("cors");
const postmark = require("postmark");
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const app = express();
app.use(cors({ origin: true }));

admin.initializeApp();

exports.sendEmail = functions
  .runWith({
    secrets: ["POSTMARK_SERVER_TOKEN", "CONTACT_FORM_RECEIVING_EMAIL"],
  })
  .https.onCall(async (data: { [index: string]: string }) => {
    const { subject, message } = data;
    const postmarkClient = new postmark.ServerClient(
      process.env.POSTMARK_SERVER_TOKEN
    );

    try {
      const result = await postmarkClient.sendEmail({
        From: process.env.CONTACT_FORM_RECEIVING_EMAIL,
        To: process.env.CONTACT_FORM_RECEIVING_EMAIL,
        Subject: subject,
        HtmlBody: message,
      });

      return { success: true, result };
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, error };
    }
  });
