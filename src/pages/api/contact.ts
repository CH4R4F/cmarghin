import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { name, email, message } = req.body;
    const key = process.env.SENDGRID_API_KEY as string;
    const myEmail = process.env.MY_EMAIL as string;

    try {
      sgMail.setApiKey(key);
      const msg = {
        to: myEmail,
        from: myEmail,
        subject: `Message from ${name} via CMarghin`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await sgMail.send(msg);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.log(error);

      res.status(500).json({ error: "Something went wrong" });
    }
  }
}
