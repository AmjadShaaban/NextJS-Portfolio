import nodemailer, { Transporter, SendMailOptions } from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter: Transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

const contactAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST': {
      const { name, email, message } = req.body;
      const mailOptions: SendMailOptions = {
        to: process.env.EMAIL,
        subject: `Message from ${name}`,
        html: `<h1>${name}</h1><h3>${message}</h3><p>${new Date()}</p><h2>${email}</h2>`
      };
      console.log(mailOptions);
      await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res.status(500).json(err);
        } else {
          return res.status(200).json(true);
        }
      });
    }
    default: {
      return res.status(403).send('ACCESS DENIED!');
    }
  }
};
export default contactAPI;
// const sendEmail = (from: string, subject: string, html: string) => {
