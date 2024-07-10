const express = require("express");
const cors = require("cors");
const postmark = require("postmark");
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const app = express();
app.use(cors({ origin: true }));

admin.initializeApp();

const postmarkClient = new postmark.ServerClient(
  "732a3ccc-ce12-47b6-845a-7469ea8d7b04"
);

export const sendEmail = functions.https.onCall(
  async (data: { [index: string]: string }) => {
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
  }
);
