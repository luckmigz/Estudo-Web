import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { getFavoritos, deleteFavorito } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const FavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favoritos() {
  
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id)
    alert(`Livro de id:${id} deletado!`)
  }

  useEffect(() => {
      fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <div>
        <Titulo>Favoritos</Titulo>
        <FavContainer>
             {
              favoritos.lenth !== 0 ?  favoritos.map(favoritos =>
                (<Resultado onClick ={() => deletarFavorito(favoritos.id)}>
                  <p>
                  {favoritos.nome}
                  </p>
                  <img src = {livroImg}/>
            </Resultado>)): null
            }
        </FavContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos

