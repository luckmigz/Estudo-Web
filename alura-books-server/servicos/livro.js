const fs = require('fs');

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroById(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]

    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(mod, id){
    //lidando com um aquivo de texto e salvando em uma let por ser uma variavel 
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    //achando o Id do livro pra modificar 
    const modId = livrosAtuais.findIndex(livro => livro.id === id)
    //O comando livrosAtuais[indiceModificado] cria um obj novo no id de livrosAtuais com os campos já existentes 
    //e o mod consiste num obj q tem os campos a serem alterados
    const conteudoMudado = {...livrosAtuais[modId], ...mod}
    
    livrosAtuais[modId] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}
function deletaLivroById(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const filtered = livros.filter(livro => livro.id!== id)
    fs.writeFileSync("livros.json", JSON.stringify(filtered))
}

module.exports = {
    getTodosLivros,
    getLivroById,
    insereLivro,
    modificaLivro,
    deletaLivroById
}