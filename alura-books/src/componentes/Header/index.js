import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styeled from 'styled-components'


const HeaderContainer = styeled.header`
    
    background-color: #282c34;
    display: flex;
    color: #fff;
    justify-content: center;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header