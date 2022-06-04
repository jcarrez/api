const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
require('dotenv').config();

const app = express();

const port = process.env.PORT;    //Port d'écoute
const envhost = process.env.HOST; //Hôte mail
const envsmtp = process.env.SMTP; //Port SMTP 
const envuser = process.env.USER; //Utilisateur Mail
const envpass = process.env.PASS; //Mot de passe Mail
const envdest = process.env.DEST; //Destinataire des mails


let configOptions = {
	host: envhost,
	port: envsmtp,
	secure: false,
	auth: {
		user: envuser,
		pass: envpass
	},
	tls: {
        rejectUnauthorized: false
    }
}

let transporter = nodemailer.createTransport(configOptions)

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

function sendmail(subj, mess)
{
    message = {
	    from: envuser,
	    to: envdest,
	    subject: subj,
	    html: mess
    };
    transporter.sendMail(message, function(err,info) {
		  console.log(info);
      console.log(err);
	  });
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/0/mail', (req, res) => {
    const data = req.body;
    
    subj = data.subj;
    mess = data.mess;
    sendmail(subj, mess);
    res.send();
});

app.listen(port, () => console.log(`Listen on port ${port}!`));