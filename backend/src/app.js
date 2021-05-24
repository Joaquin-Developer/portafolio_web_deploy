const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")

// settings:
app.set("port", process.env.PORT || 5000)
app.use(cors({ origin: "https://joaquin-parrilla.github.io/" }))
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
