const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tomeragai2@gmail.com',
        subject: 'golda bnei dror',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tomeragai2@gmail.com',
        subject: 'Delete your account in task app',
        text: `Dear ${name}, We are sorry to hear you want to close your account. Please let us know what we could have done better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// sgMail.send({
//     to: 'tomeragai2@gmail.com',
//     from: 'tomeragai2@gmail.com',
//     subject: 'shabtai',
//     text: 'I will never go there'
// })