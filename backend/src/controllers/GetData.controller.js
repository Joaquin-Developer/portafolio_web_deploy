const getDataController = {}

getDataController.getData = (req, res) => {
    const data = require("../public/json/SkillsData.json")
    res.json(data)
}

module.exports = getDataController
