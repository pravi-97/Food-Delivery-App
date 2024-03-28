const Service = require('../service/service')

async function getPrice(req, res) {
    const msg = await Service.getDatafromPricing(req.body, res);
}
module.exports = { getPrice }