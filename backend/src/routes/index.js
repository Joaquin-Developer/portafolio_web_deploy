const { Router } = require("express")
const router = Router()
require("dotenv").config();

// const sendMailController = require("../controllers/SendMail.controller")
const sendOutlookMail = require("../controllers/SendOutlookMai.controller")
const getDataController = require("../controllers/GetData.controller")

router.get("/", (req, res) => { res.send("index") })
router.get("/getAboutMeData", getDataController.getData)
// router.post("/sendCvRequest", sendMailController.send)

router.post("/sendCvRequest", (req, res) => {
    let mail = req.body.mail

    if (mail) {
        try {
            sendOutlookMail.send(mail)
            res.status(200).send({ status: true, data: { email: mail }})
        } catch (error) {
            res.json({ 
                message: "Error al enviar CV", msgError: error.message, 
                error: JSON.stringify(error), status: false 
            })
        }
    } else {
        res.status(500).json({ message: "ERROR: MISSING MAIL", status: false })
    }

})

module.exports = router;
