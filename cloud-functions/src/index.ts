const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: true }));

admin.initializeApp();

exports.sendEmail = functions
  .runWith({
    secrets: [
      "MAILGUN_HOST",
      "MAILGUN_PORT",
      "MAILGUN_USERNAME",
      "MAILGUN_PASSWORD",
      "CONTACT_FORM_RECEIVING_EMAIL",
    ],
  })
  .https.onCall(async (data: { [index: string]: string }) => {
    const { subject, message } = data;
    const transporter = nodemailer.createTransport({
      host: process.env.MAILGUN_HOST,
      port: process.env.MAILGUN_PORT,
      auth: {
        user: process.env.MAILGUN_USERNAME,
        pass: process.env.MAILGUN_PASSWORD,
      },
    });

    try {
      const emailData = {
        from: `Hivekind Website <${process.env.CONTACT_FORM_RECEIVING_EMAIL}>`,
        to: process.env.CONTACT_FORM_RECEIVING_EMAIL,
        subject: subject,
        html: message,
      };

      const result = await transporter.sendMail(
        emailData,
        (error: any, info: any) => {
          if (error) {
            return console.log(error);
          }
          console.log("Message sent: %s", info.messageId);
        }
      );

      return { success: true, result };
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, error };
    }
  });
