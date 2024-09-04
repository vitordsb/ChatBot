let express = require('express')
let ejs = require('ejs');

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.listen(8080)

// localhost:8080
app.get('/', (req, res) => {
    res.render('pages/index.ejs')
})