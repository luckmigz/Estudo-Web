// Criando a rota livros
const { Router } = require("express")
const { getLivros, getLivro,postLivro } = require("../controladores/livro")


const router = Router()

//Para consultar dados, utiliza-se a ação GET.
//Para inserir dados, utiliza-se a ação POST.
//Para deletar dados, utiliza-se a ação DELETE.
//Para editar dados, utiliza-se a ação PATCH.

// req - request(requisição), res - response(resposta) 
router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', (req, res) =>{
    postLivro(req, res)
})

router.delete('/', (req, res) =>{
    res.send('Essa é uma requisição do tipo DELETE')
})

router.patch('/', (req, res) =>{
    res.send('Essa é uma requisição do tipo PATCH')
})


module.exports = router