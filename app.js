const express = require('express')
const app = express()
const router = require('./src/rotas/routerPessoas')
const path = require('path')
const routerIndex = require('./src/rotas/routerIndex')
app.set('view engine','ejs')
app.use('/pessoas', router)
app.use('/index',routerIndex)



app.use(express.static(path.join(__dirname,'public')))

app.listen(3000,() =>{console.log("Servidor rodando na porta 3000")})







