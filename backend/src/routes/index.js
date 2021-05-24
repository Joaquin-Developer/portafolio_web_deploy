
// const { response } = require("express");
const { Router } = require("express")
const router = Router()
require("dotenv").config();

const sendMailController = require("../controllers/SendMail.controllers")
const getDataController = require("../controllers/GetData.controllers")

router.get("/", (req, res) => {
    res.send("index")
});

router.get("/getAboutMeData", getDataController.getData)

// router.get("/curriculum", (req, res) => {
//     res.render("formToRequestCv.html")
// })

// router.post("/request-cv", sendMailController.send)
router.post("/sendCvRequest", sendMailController.send)
router.post("/test", function(req, res) {
    console.log(req.body)
    res.send("ok")
})

module.exports = router;
