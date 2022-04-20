const express = require('express');
require('dotenv').config({ path: 'nodemailer/.env'}) //환경변수 설정

const nodemailer = require('./nodemailer/index')
const app = express()

app.use(express.json({
  limit: '50mb'
}));

app.listen(3000, () => {
  console.log('server starting')
})

app.post('/api/email', async (req, res) => {
  const r = await nodemailer.send(req.body.param)
  res.send(r)
})