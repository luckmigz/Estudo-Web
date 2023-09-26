//Import do express 
const express = require("express")

//Importando/Declarando  rotas 
const rotaLivro = require("./rotas/livros.js")
const rotaFavorito = require("./rotas/favorito.js")

// Import do CORS - Cross-origin Resource Sharing
const cors = require("cors")

// Criando uma aplicação express
const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

// Utilizando rotas 
app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)


// Porta de acesso do back-end
const port = 8000

//"escuta" a porta do back-end 
app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)
})


