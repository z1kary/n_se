const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const axios = require('axios')
require('dotenv').config({ path: './.env' })

const T_API = `https://api.telegram.org/bot${process.env.TOKEN}`
const WEBHOOK_URL = process.env.URL + `/webhook/${process.env.TOKEN}`

const app = express()
app.use(cors({origin: "*"}))
app.options(process.env.CLIENT_URL, cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.options(process.env.CLIENT_URL, cors());
app.use(bodyParser.json())

const init = async () => {
  const res = await axios.get(`${T_API}/setWebHook?url=${WEBHOOK_URL}`)
  console.log(res.data)
}


app.post('/uag', (req, res) => {
    console.log(req.body)
    console.log(req.data)
      
    // console.log(navigator.userAgent)
    // await axios.post(`${T_API}/sendMessage`, {
    //   chatId: "094893",
    //   text: navigator.userAgent
    // })
  
})

app.listen(process.env.PORT, async () => {
  console.log(`Listening on port : ${process.env.PORT}`)
  await init()
})