
let functions = {};

functions.send = (req, res) => {
    const nodemailer = require("nodemailer");
    const smtpTransport = require("nodemailer-smtp-transport");

    const emailFrom = req.body.email;
    const message = req.body.message;

    const transporter = nodemailer.createTransport(smtpTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: process.env.SEND_EMAIL_MAIL,
            pass: process.env.SEND_EMAIL_PASSWORD
        }
    }));

    const mailOptions = {
        from: process.env.SEND_EMAIL_MAIL,
        to: "joaquin.p.olivera@gmail.com",
        subject: "Solicitúd de Curriculum a través de portafolio web",
        // text: message
        html: `<p>${message}</p><hr><br>Email del solicitante: ${emailFrom}`
        // html: "<b>Hello world?</b>", // html body (example)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error al enviar CV");
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({ estado: "ok", datos: { email: emailFrom, message: message }});
        }
    });

}

module.exports = functions;
