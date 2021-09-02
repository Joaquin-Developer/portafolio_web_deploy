const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")

// settings:
app.set("port", process.env.PORT || 5000)
// app.use(cors({ origin: "https://joaquin-parrilla.github.io/" }))

// cors middleware:
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "https://joaquin-parrilla.github.io");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
    next();
});

app.use(cors())
app.use(express.json()) // read json
app.use(express.urlencoded({ extended: false }))    // read html forms

// routes:
app.use("/api", require("./routes/index"))
app.use("/static", express.static(path.join(__dirname, "public/media")));

// 404 not found requests:
app.use((request, response, next) => {
    response.status(404).send("404 not found")
});

module.exports = app
