const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())


app.listen(3000, () => {console.log('server running on port 3000')})
