import express from 'express'

const app = express()

app.get('/home', (req,res) => {
    res.send('Olá, mundo!')
})

app.listen(3000)