const express = require('express');
const app = express();
const router = require('./routes/Books')
//static assets if any
//app.use(express.static('./foldername))
//parsing all payload data
app.use(express.json())

app.use('/api/v1/book', router)

app.listen(8000, () => {
    console.log('Listening at 8000')
})