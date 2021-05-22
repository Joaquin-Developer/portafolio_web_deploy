
const app = require("./app.js")

function run() {
    app.listen(app.get("port"), () => {
        console.log("Server running on port", app.get("port"))
    })
}

run();
