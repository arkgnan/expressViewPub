const express = require('express')
const app = express()

app.set('view engine', 'pug')
// app.set('views', './views')
app.use(express.static('public'));

app.get('/', function(req, res) {
    // logic (controller, routes, algoritma)
    peserta = [
        {
            name: 'dedi'
        },
        {
            name: 'ananto'
        }
    ]
    res.render('index', { title: 'Sesi Express Terakhir', content: 'lorem ipsum', data: peserta })
})

app.listen(3000, () => console.log('connecting to port 3000'))