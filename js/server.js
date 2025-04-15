const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Nodemailer transporter (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail address
    pass: 'your-email-password', // Replace with your Gmail password or app-specific password
  },
});

// Route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Email options
  const mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: 'recipient-email@gmail.com', // Recipient address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
=======
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
>>>>>>> 98f25506ce6df26901211328a731c3630f3b5b34
    }
  });
});

<<<<<<< HEAD
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
=======
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
>>>>>>> 98f25506ce6df26901211328a731c3630f3b5b34
