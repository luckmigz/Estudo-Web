
function getLivros(req, res) {
    try{
        res.send("Olá mundo da Alura do Braza!")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros 
}