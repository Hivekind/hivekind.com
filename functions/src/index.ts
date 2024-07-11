const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const app = express();
app.use(cors({ origin: true }));

admin.initializeApp();
const mailgun = new Mailgun(formData);

exports.sendEmail = functions
  .runWith({
    secrets: [
      "MAILGUN_API_KEY",
      "MAILGUN_DOMAIN",
      "CONTACT_FORM_RECEIVING_EMAIL",
    ],
  })
  .https.onCall(async (data: { [index: string]: string }) => {
    const { subject, message } = data;
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });

    try {
      const emailData = {
        from: process.env.CONTACT_FORM_RECEIVING_EMAIL,
        to: process.env.CONTACT_FORM_RECEIVING_EMAIL,
        subject: subject,
        html: message,
      };

      const result = await mg.messages.create(
        process.env.MAILGUN_DOMAIN,
        emailData
      );

      return { success: true, result };
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, error };
    }
  });
