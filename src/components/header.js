import styled from 'styled-components'


const HeaderStyled = styled.div`
& {
    display: flex;
    align-items: center;
    block-size: 6rem;
    /* border: 1px solid red; */
}

.nav {
    display: flex;
    gap: 1rem;
    margin-inline-start: 9.29rem;
}
.nav a {
    font: var(--desktop-body2-bold);
    text-decoration: none;
}
.login {
    margin-inline-start: 5.82rem;
    font: var(--desktop-buttons);
}
.boton {
    margin-inline-start: 2rem;
}
.boton button {
    background: var(--primary);
    color: var(--white);
    inline-size: 7.62rem;
    block-size: 3rem;
    border-radius: 40px;
    border: none;
    font: var(--desktop-buttons);
}
`

function Header() {
    return (

        <HeaderStyled>
            <img src='../images/calendly.png' alt='logo' title='Logo Calel'></img>
            <div className='nav'>
                <a href='#'>Particulares</a>
                <a href='#'>Equipos</a>
                <a href='#'>Producto</a>
                <a href='#'>Precios</a>
                <a href='#'>Recursos</a>
            </div>
            <div className='login'>
                <span>Iniciar sesion</span>
            </div>
            <div className='boton'>
                <button>Registrese</button>
            </div>
        </HeaderStyled>

    )
}

export default Header
