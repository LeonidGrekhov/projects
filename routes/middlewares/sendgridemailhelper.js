//require('dotenv').config();
//const sendGrid = require('sendgrid').mail;
//const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/*const sendVerificationEmail = (to, token) => {
  const msg = {
    to: to,
    from: "no-reply@litlister.com",
    subject: 'Verify Your Email for Your LitLister Account',
    text: 'Click on this link to verify your email litlister.com/verification?token=${token}&email=${to}'
  }
  sgMail.send(msg);
}*/

const sendVerificationEmail = (to, token) => {
  const hostUrl = 'www.litlister.com';
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: [
            {
              email: to
            }
          ],
          subject: 'Verify Your Email'
        }
      ],
      from: {
        email: 'no-reply@litlister.com'
      },
      content: [
        {
          type: 'text/plain',
          value:
            'Click on this link to verify your email ${hostUrl}/verification?token=${token}&email=${to}'
        }
      ]
    }
  });
  return new Promise(function(resolve, reject) {
    sg.API(request, function(error, response) {
      if (error) {
        return reject(error);
      } else {
        return resolve(response);
      }
    });
  });
};

/*const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'jmendo12@mail.sfsu.edu',
  from: 'no-reply@litlister.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong> and easy to do anywhere, even with Node.js</strong>'
};

sgMail.send(msg);
*/
module.exports = sendVerificationEmail;
