const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { selectionTemplate, rejectionTemplate } = require('./templates');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/send-email', (req, res) => {
  const { name, email, position, status } = req.body;
  const subject = `Regarding your application for ${position}`;
  const html = status === 'selected'
    ? selectionTemplate(name, position)
    : rejectionTemplate(name, position);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.HR_EMAIL,
      pass: process.env.HR_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.HR_EMAIL,
    to: email,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send('Error sending email');
    res.send('Email sent successfully!');
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));