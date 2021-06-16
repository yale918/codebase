const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
  console.log("server fetch")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})