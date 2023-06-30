const express = require('express')
const cors = require("cors");
const connectDB = require('./config/connectDB');
const app = express()
const port = process.env.PORT | 5000;


// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})