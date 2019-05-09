//require('dotenv').config();
//const sendGrid = require('sendgrid').mail;
//const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
  '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'
);

const sendVerificationEmail = (to, token) => {
  const msg = {
    to: to,
    from: 'no-reply@litlister.com',
    subject: 'Verify Your Email for Your LitLister Account',
    text: `Click here to verify your email: https://litlister.com/verification?token=${token}&email=${to}`,
    html:
      '<a href = `litlister.com/verification?token=${token}&email=${to}`> Click here to verify your email </a>'
  };
  sgMail.send(msg);
};

/*const sendVerificationEmail = (to, token) => {
  const hostUrl = 'www.litlister.com';
  const request = sgMail.emptyRequest({
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
    sgMail.API(request, function(error, response) {
      if (error) {
        return reject(error);
      } else {
        return resolve(response);
      }
    });
  });
};*/

module.exports = sendVerificationEmail;
