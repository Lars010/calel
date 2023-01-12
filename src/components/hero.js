import styled from "styled-components";

const HeroStyled = styled.div`

& {
    display: flex;
}

& .imagen-1 {
    margin-block-start: 8rem;
}

.hero-description {
    inline-size: 100%;
    max-inline-size: 43.12rem;
    block-size: 32.12rem;
    border: 1px solid red;
    margin-block-start: 8rem;
}

.hero-description h1 {
    font: var(--desktop-h1);
    margin-block-start: 0;
}

.hero-description span {
    color: var(--primary);
}

.hero-description p {
    font: var(--desktop-body1-regular);
    margin-block-start: 4rem;
    margin-block-end: 1.5rem;
}

.register {
    /* border: 1px solid red; */
    display: flex;
    position: relative;
}

.register input {
   inline-size: 17.18rem;
   block-size: 3rem;
   border-radius: 40px;
   border: 1px solid #CECECE;
   position: relative;
}

.register input::placeholder {
    display: flex;
    font: var(--desktop-body3-regular);
    color: #CECECE;
    /* border: 1px solid red; */
    padding-inline-start: 1.5rem;
}

.register button {
    inline-size: 7.62rem;
    block-size: 3rem;
    font: var(--desktop-buttons);
    color: var(--white);
    background: var(--black);
    border-radius: 40px;
    position: absolute;
    inset-inline-start: 13rem;
    cursor: pointer;

.imagen-1 {
    /* border: 1px solid red; */
    margin-block-start: 8rem;
}
    
}

`

function Hero() {
  return (
    <HeroStyled>
      <div className="hero-description">
        <h1>Programación fácil con <span>anticipación</span></h1>
        <p>
          Calel es su centro de programación de reuniones de manera profesional
          y eficiente y elimina el problema del intercambio de correos
          electrónicos para que pueda dedicar más tiempo a su trabajo.
        </p>
        <div className="register">
        <input type="email" id="email" name="email" placeholder="Ingrese su email"/>
        <button>Registrese</button>
        </div>
      </div>
      <div className="imagen-1">
        <img src="../images/img.png" alt="imagen1" title="Programacion facil"></img>
      </div>
    </HeroStyled>
  );
}

export default Hero;
