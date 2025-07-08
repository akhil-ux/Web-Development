const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
app.use(express.static("public"))
// MIDDLEWARE 1
app.use((req, res, next)=>
{
    var x =(`${Date.now()} is a ${req.method}`)
    fs.appendFileSync("log.txt",`${x}\n`)
    req.akhil ="hey i am akhil"

    next()
})
// MIDDLEWARE 2
app.use((req, res, next)=>
{
    console.log('middle ware created successfully M2')
    req.akhil ="hey i am akhil bhaiiii"
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about/:slug', (req, res) => {
    res.send(`Hello and welcome to ${req.params.slug},${req.akhil}`)
})
app.get('/more', (req, res) => {
    res.sendFile('click to know more')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
