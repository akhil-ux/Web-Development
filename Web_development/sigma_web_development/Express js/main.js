const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)
app.get('/', (req, res) => {
  res.send('Hello POSTMAN APPLICATION')
})
// SLUG USAGE
app.get('/about/:slug', (req, res) => {
  const slug = req.params.slug;
  res.send(`About usss and ${slug}`)
})

//POST REQUEST
app.post('/postrequest', (req, res) => {
  console.log("This is a console log message of post request")
  res.send('POST request successful ')
})


app.put('/putrequest', (req, res) => { //PUT REQUEST
  console.log("This is a console log message of PUT request")
  res.send('PUT request successful ')
})


app.delete('/deleterequest', (req, res) => { //DELETE REQUEST
  console.log("This is a console log message of DELETE request")
  res.send('DELETE request successful ')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//HTML FILE MERGE
app.get("/index", (res, req) => {
  console.log("console msg for HTML FILE MERGING SUCCESSFUL")
  req.sendFile('index.html', { root: __dirname })
})
