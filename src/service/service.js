const da = require('../dataAccess/da')

class Service {
    async getDatafromPricing(obj, res) {
        const response = await da.getPrice(obj, res);
    }
}

module.exports = new Service();