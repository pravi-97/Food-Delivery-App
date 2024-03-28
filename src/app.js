const express = require('express');
const router = require('./routes/routes');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use("/api", router)

module.exports = app