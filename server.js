const express = require('express')
const app = express();
const port = 3000;

app.get('/schedule', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log('ello listening in on port: ', port)

})