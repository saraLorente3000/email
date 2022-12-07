const nodemailer = require("nodemailer");

async function sendEmail(email, newsletter) {
/*test account provided by nodemailer, until the beginning of this year you could use a gmail account disabling 
a security criterion but it is no longer possible*/
  let testAccount = await nodemailer.createTestAccount();
//I create the transport with the test email data
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'sara.lorente@gmail.com', 
    to: `${email}`, 
    subject: `title ${newsletter}`,  
    text: `text ${newsletter}`,  
    html: "<b>Hello world?</b>", 
  });

 
}

exports.sendEmail = sendEmail