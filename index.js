const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const axios = require('axios')
require('dotenv').config({ path: './.env' })

const T_API = `https://api.telegram.org/bot${process.env.TOKEN}`
const WEBHOOK_URL = process.env.URL + `/webhook/${process.env.TOKEN}`

const app = express()
app.use(cors())
// app.options(process.env.CLIENT_URL, cors());
app.use(bodyParser.json())

const init = async () => {
  const res = await axios.get(`${T_API}/setWebHook?url=${WEBHOOK_URL}`)
  console.log(res.data)
}


app.post('/uag', async (req, res) => {
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