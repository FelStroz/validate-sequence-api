let uuid = require('node-uuid')

module.exports = {
    assignId: async (req, res, next) => {
        req.id = uuid.v4()
        next()
    }
}
