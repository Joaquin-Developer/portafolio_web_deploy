const nodeoutlook = require("nodejs-nodemailer-outlook")
const SendOutlookMail = {}

SendOutlookMail.send = (emailFrom) => {
    nodeoutlook.sendEmail({
        auth: {
            user: process.env.SEND_EMAIL_MAIL,
            pass: process.env.SEND_EMAIL_PASSWORD
        },
        from: process.env.SEND_EMAIL_MAIL,
        to: "joaquin.p.olivera@gmail.com",
        subject: "Solicitúd de Curriculum a través de portafolio web",
        // text: message
        html: `<p>El siguiente correo solicitó una copia del CV:</p><hr><strong>${emailFrom}</strong>`,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    })
}

module.exports = SendOutlookMail
