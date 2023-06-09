const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => res.redirect('/'))

app.listen(process.env.PORT, () => {
    console.log('listening...')
})