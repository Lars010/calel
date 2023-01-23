import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PricesStyled = styled.div`

:root {
  --black: #373737;
  --primary: #ff8e3c;
  --white: #ffffff;
  --grey: #848199;
  --red: #fa513a;
  --grey-2: #a3a3a3;
  --bg: #f5f5fa;
  --headline1: 600 3.5rem/normal 'Poppins';
  --headline2: 600 1.75rem/normal 'Poppins';
  --body1-regular: 400 1rem/1.5rem 'Poppins';
  --body1-bold: 700 1rem/1.5rem 'Poppins';
  --body2-regular: 400 0.875rem/1.5rem 'Poppins';
}

body {
  font: var(--mobile-body2regular);
  margin: 0;
  
}

h1 {
  font: var(--desktop-h2);
  color: #ff8e3c;
}

h2 {
  font: var(--desktop-h5-medium);
  color: #fa513a;
}

h3 {
  font: var(--desktop-body3-regular);
}

p {
  color: #848199;
}

.layout {
  block-size: 100vh;
  /* border: 1px solid red; */
  background: #f5f5fa;
  margin: 0;
}

.titulo {
  inline-size: 35rem;
  block-size: 7.75rem;
  /* margin-inline-start: 3.4rem; */
  /* border: 1px solid red; */
}

.titulo h1 {
  font: var(--desktop-h2);
  color: var(--black);
  margin-block-end: 1rem;
}

.titulo p {
  font: var(--mobile-body2regular);
  color: #848199;
}

.contenedor {
  display: flex;
  inline-size: 100%;
  max-inline-size: 73.12rem;
  block-size: 32.5rem;
  border: 1px solid var(--black);
  /* margin-inline-start: 3.4rem; */
  margin-block-start: 8.12rem;
  align-items: center;
  background: var(--grey-bg);
  border-radius: 26px;
  box-shadow: 0px 42px 34px rgba(82, 67, 194, 0.295755);
}

.oferta {
  inline-size: 14.6rem;
  block-size: 24.37rem;
  margin-block-start: 2.5rem;
  margin-inline-start: 2.5rem;
  padding-block: 2.5rem;
  background: #f5f5fa;
  border-radius: 26px;
  
}

.plan-1 {
    margin-inline-start: 0;
}

.oferta .precio {
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
}

.plan-3 .precio {
  display: flex;
  align-items: center;
}

.precio h2 {
  font: var(--desktop-h5-medium);
  color: var(--black);
  margin-block-start: 0;
  margin-block-end: 1rem;
}

.precio p {
  margin-block-start: 0;
}

.descripcion h2 {
  margin-block: 0;
  color: var(--black);
}

.descripcion p {
  margin-block-start: .62rem;
}

.font {
  display: flex;
  align-items: center;
}

.font p {
  margin-inline-start: .5rem;
  font: var(--body2-regular);
  margin-block-end: 0;
}

.beneficios {
  line-height: 1rem;
}

.boton {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  margin-block-start: 1rem;
}

button {
  cursor: pointer;
}

.boton button {
  inline-size: 14.62rem;
  block-size: 3rem;
  font: var(--mobile-body2bold);
  border-radius: 90px;
  color: #FF8E3C;
  background: rgba(255, 142, 60, 0.1);
  border: none;
}

.plan-1 .beneficio-2 {
  opacity: 0.3;
}

.plan-1 .beneficio-3 {
  opacity: 0.3;
}

.plan-1 .beneficio-4 {
  opacity: 0.3;
}

.plan-2 .beneficio-3 {
  opacity: 0.3;
  }

  .plan-2 .beneficio-4 {
    opacity: 0.3;
    }  

.plan-3 {
  block-size: 30rem;
  inline-size: 18.25rem;
  background: #FFBF90;
  box-shadow: 0px 42px 34px rgba(82, 67, 194, 0.295755);
  border-radius: 26px;
  margin-inline-start: 2.5rem;
  margin-inline-end: 0;
}

.mas-popular {
  /* border: 3px solid red; */
  display: flex;
  justify-content: flex-end;
}

.popular {
  display: flex;
  inline-size: 7.56rem;
  block-size: 1.68rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  background: #FFD5B6;
  border-radius: 90px;
  margin-block-start: 1.25rem;
  margin-block-end: .68rem;
  margin-inline-end: 1.25rem;
}

.popular p {
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 12px;
  color: var(--black);
}

.boton-especial button {
  background: var(--black);
  color: var(--white);
}

.plan-3 {
  /* border: 3px solid red; */
  inset-block-start: 1rem;
}

.plan-3 p {
  color: var(--black);
}

.plan-3 .precio {
  display: flex;
  /* border: 1px solid red; */
  margin-inline-start: 2.12rem;
}

.plan-3 .nivel {
  margin-inline-start: 2.12rem;
}

.plan-3 .beneficios {
  margin-inline-start: 2.12rem;
}

.titulo button {
    inline-size: 4rem;
    block-size: 2rem;
    border-radius: 28px;

}

@media screen and (max-width: 414px) {

  body {
    background: whitesmoke;
    display: flex;
    justify-content: center;
  }

  .layout {
    display: inline-block;
    inline-size: 100%;           /*Al poner el inline-size a un 100* se mostrara el contenido completo hasta el max inline size  */
    max-inline-size: 22.5rem;
    block-size: 100vh;
    justify-content: center;
  }

  .titulo {
    inline-size: 18.25rem;
    margin-inline-start: 2.12rem;
  }

  .titulo h1 {
    font: var(--headline2);
  }

  .contenedor {
    display: grid;
    grid-template-areas: "plan-3" "plan-1" "plan-2" "plan-4";
    background: none;
    margin-inline-start: 0;
    margin-block-start: 1.5rem;

    /* grid-template-columns: 18.25rem;
  grid-template-rows: 1fr;
  flex-direction: column; */
  }

  .plan-3 {
    grid-area: plan-3;
    margin-inline: 2.12rem;
  }

  .plan-1 {
    grid-area: plan-1;
    padding: 1.75rem;
    border-radius: 26px;
    margin-inline: 2.12rem;
  }

  .plan-2 {
    grid-area: plan-2;
    padding: 1.75rem;
    border-radius: 26px;
    margin-inline: 2.12rem;
  }

  .plan-4 {
    grid-area: plan-4;
    padding: 1.75rem;
    border-radius: 26px;
    margin-inline: 2.12rem;
  }
}

`

function Prices() {
    return (
        <PricesStyled>
            
            <div className="layout">
            <div className="titulo">
      <h1>Planes y precios</h1>
      <p>Elige el plan que más te convenga y comienza a aprender hoy mismo</p>
      
      <Link to='/'><button>Home</button></Link>
      
    </div>
    <div className="contenedor">
      <div className="plan-1 oferta">
        <div className="precio">
          <h2>$500</h2>
          <p>/mes</p>
        </div>
        <div className="descripcion">
          <h2>Básico</h2>
         <p>Comienza a aprender y ve contenido nuevo cada mes.</p>
         <div className="beneficios">
          <div className="beneficio-1 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20" />
            <p>Acceso a todos los proyectos</p>
          </div>
          <div className="beneficio-2 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Acceso a todos los talleres</p>
          </div>
          <div className="beneficio-3 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Acceso a todos los cursos</p>
          </div>
          <div className="beneficio-4 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Acceso a Discord</p>
          </div>
         </div>
         <div className="boton">
         <Link to='/payment'><button>Elegir plan</button></Link>
         </div>
        </div>
      </div>

      <div className="plan-2 oferta">
        <div className="precio">
          <h2>$700</h2>
          <p>/mes</p>
        </div>
        <div className="descripcion">
          <h2>Intermedio</h2>
         <p>Comienza a aprender y ve contenido nuevo cada mes.</p>
         <div className="beneficios">
          <div className="beneficio-1 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20" />
            <p>Acceso a todos los proyectos</p>
          </div>
          <div className="beneficio-2 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Acceso a todos los talleres</p>
          </div>
          <div className="beneficio-3 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Acceso a todos los cursos</p>
          </div>
          <div className="beneficio-4 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Acceso a Discord</p>
          </div>
         </div>
         <div className="boton">
         <Link to='/payment'><button>Elegir plan</button></Link>
         </div>
        </div>
      </div>
      <div className="plan-3 destacado">
        <div className="mas-popular">
          <div className="popular">
            <p>MAS POPULAR</p>
          </div>
        </div>
        <div className="precio">
          <h2>$1,000</h2>
          <p>/mes</p>
        </div>
        <div className="descripcion">
          <div className="nivel">
            <h2>Profesional</h2>
           <p>Comienza a aprender y ve contenido nuevo cada mes.</p>
          </div>
         <div className="beneficios">
          <div className="beneficio-1 font">
            <img src="./images/check-circle-white.png" alt="check" width="20" height="20" />
            <p>Acceso a todos los proyectos</p>
          </div>
          <div className="beneficio-2 font">
            <img src="./images/check-circle-white.png" alt="check" width="20" height="20"/>
            <p>Acceso a todos los talleres</p>
          </div>
          <div className="beneficio-3 font">
            <img src="./images/check-circle-white.png" alt="check" width="20" height="20"/>
            <p>Acceso a todos los cursos</p>
          </div>
          <div className="beneficio-4 font">
            <img src="./images/check-circle-white.png" alt="check" width="20" height="20"/>
            <p>Acceso a Discord</p>
          </div>
         </div>
         <div className="boton boton-especial">
         <Link to='/payment'><button>Elegir plan</button></Link>
         </div>
        </div>
      </div>
      <div className="plan-4 oferta">
        <div className="precio">
          <h2>$1,200</h2>
          <p>/mes</p>
        </div>
        <div className="descripcion">
          <h2>Profesional+</h2>
         <p>Comienza a aprender y ve contenido nuevo cada mes.</p>
         <div className="beneficios">
          <div className="beneficio-1 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20" />
            <p>Acceso a todos los proyectos</p>
          </div>
          <div className="beneficio-2 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Acceso a todos los talleres</p>
          </div>
          <div className="beneficio-3 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Acceso a todos los cursos</p>
          </div>
          <div className="beneficio-4 font">
            <img src="./images/check-circle-1.png" alt="check" width="20" height="20"/>
            <p>Mentorias personalizadas</p>
          </div>
         </div>
         <div className="boton">
         <Link to='/payment'><button>Elegir plan</button></Link>
         </div>
        </div>
      </div>
    </div>
    </div>

        </PricesStyled>
    )
}

export default Prices
