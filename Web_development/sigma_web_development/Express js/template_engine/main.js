let express = require('express');
let app = express();
app.set('view engine', 'ejs');
const port = 3000
app.use(express.static('/templates'))

app.get('/', (req, res) => {
    req.send("hey")
})
app.get('/blog/:slug', (req, res) => {
    let blogtitile = "PUMA why?"
    let searchnow = "Search Now"
    res.render("index", { sitename: `${req.params.slug}`,searchhh:searchnow })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
