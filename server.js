const app = require('./src/app')
const port = 3000;

app.listen(port, () => {
    console.log(`Food Delivery App listening on port ${port}`)
})