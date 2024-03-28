require('dotenv').config(); 
const { Pool } = require('postgres-pool');
const pool = new Pool({
    connectionString: process.env.DB_URI,
    ssl: 'aws-rds'
});

function convertToDollers(price){
    return price/100;
}
async function getPrice(obj, res) {
    try {
        const result1 = await pool.query("SELECT * from pricing where zone = $1 and organization_id = $2 ",
            [obj.zone, obj.organization_id]);

        if (result1.rows.length == 0) {
            throw Error(`ORG ERROR - No Organization with ID ${obj.organization_id} found in zone ${obj.zone}`)
        }

        const result2 = await pool.query("SELECT * from item where id = $1", [result1.rows[0].item_id]);
        if (result2.rows.length == 0) {
            throw Error(`TYPE NOT FOUND - No item found for zone ${obj.zone} and Organization ${obj.organization_id}`);
        }
        if (obj.item_type != result2.rows[0].type) {
            throw Error(`TYPE ERROR - ${obj.item_type} not found for zone ${obj.zone} and Organization ${obj.organization_id}`);
        }

        let price = 0;
        const base_distance_in_kms = result1.rows[0].base_distance_in_kms;
        const km_price = result1.rows[0].km_price; 
        const fix_price = result1.rows[0].fix_price;

        if (base_distance_in_kms < obj.total_distance)
            price = fix_price + (km_price * (obj.total_distance - base_distance_in_kms));
        else price = fix_price;

        res.status(200).send({ "total_price": convertToDollers(price)});
    } catch (e) {
        console.log(e.message);
        if (e.message.includes("ORG ERROR"))
            res.status(404).send({"ErrorMessage" : e.message.replace("ORG ERROR - ", "")});
        else if (e.message.includes("TYPE NOT FOUND"))
            res.status(404).send({ "ErrorMessage": e.message.replace("TYPE NOT FOUND - ", "") });
        else if (e.message.includes("TYPE ERROR"))
            res.status(404).send({"ErrorMessage" : e.message.replace("TYPE ERROR - ", "")});
        else res.status(500).send({"ErrorMessage" : e.message });
    }
}

module.exports = { getPrice }