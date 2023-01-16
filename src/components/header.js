import styled from 'styled-components'
import { useState } from 'react';


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

.hamburger {
    display: none;
    background: var(--white);
    border: none;
}

@media screen and (max-width: 414px) {
& {
    display: flex;
    justify-content: space-around;
    inline-size: 100%;
    max-inline-size: 24.37rem;
}
.nav {
        display: block;
        /* border: 1px solid red; */
        position: fixed;
        top: 100px;
        left: 0px;
        padding-inline-start: 20px;
        width: 390px;
        height: 100%;
        background: #fff;
        display: none;
    }
    .nav a {
        display: block;
    }
    .login {
        display: none;
    }
    .hamburger {
        /* position: absolute; */
        top: 20px;
        left: 20px;
        z-index: 1;
        display: block;
        cursor: pointer;
    }
}
`

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <HeaderStyled>
            <img src='../images/calendly.png' alt='logo' title='Logo Calel'></img>
            <div className='nav' style={{ display: menuOpen ? 'block' : 'none' }}>
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
            <button className='hamburger'  onClick={() => setMenuOpen(!menuOpen)}>
                <img src='../images/menu.png' alt='menu' title='menu'></img>
            </button>

            
        </HeaderStyled>

    )
}

export default Header
