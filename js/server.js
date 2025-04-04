const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourgmail@gmail.com',       // replace with your Gmail
      pass: 'your-app-password'          // create an App Password for Gmail
    }
  });

  const mailOptions = {
    from: email,
    to: 'yourgmail@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send('error');
    } else {
      res.send('success');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
