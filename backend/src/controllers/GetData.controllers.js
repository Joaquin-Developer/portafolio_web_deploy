const getDataController = {}

getDataController.getData = (req, res) => {
    res.json({ "status": true })
}

module.exports = getDataController
