//Import do express 
const express = require("express")

//Import do livros.js
const rotaLivro = require("./rotas/livros.js")

// Criando uma aplicação express
const app = express()

app.use(express.json())

app.use('/livros', rotaLivro)


// Porta de acesso do back-end
const port = 8000

//"escuta" a porta do back-end 
app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)
})


