const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose