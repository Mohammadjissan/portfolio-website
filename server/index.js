import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug env check
console.log("📧 EMAIL_USER:", process.env.EMAIL_USER);
console.log(
  "🔑 EMAIL_PASS:",
  process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌"
);

// Route
app.post("/contact", async (req, res) => {
  console.log("🔥 API HIT");
  console.log("📦 BODY:", req.body);

  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      console.log("❌ Missing fields");
      return res.status(400).json({ success: false, error: "All fields required" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true,
    });

    // Verify SMTP
    await transporter.verify();
    console.log("✅ SMTP connection successful");

    // Send mail
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact - ${subject}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("📩 MAIL INFO:", info);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ FULL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});