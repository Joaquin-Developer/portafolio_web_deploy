
const { response } = require("express");
const router = require("express").Router();
require("dotenv").config();
const sendMail = require("../controllers/SendMail");

router.get("/", function(request, response) {
    response.render("index.html");
});

router.get("/curriculum", (req, res) => {
    res.render("formToRequestCv.html");
})

router.post("/request-cv", sendMail.send);


module.exports = router;