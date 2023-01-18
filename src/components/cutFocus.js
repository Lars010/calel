import styled from "styled-components";

const CutFocusStyled = styled.div`
  .wrapper-focus {
    display: flex;
    block-size: 31.81rem;
    /* border: 1px solid blue; */
  }

  .focus {
    inline-size: 100%;
    max-inline-size: 36.75rem;
    block-size: 18.25rem;
    margin-block-start: 2.78rem;
    margin-inline-start: 5.18rem;
    margin-inline-end: 7.87rem;
    /* border: 1px solid blue; */
  }

  .focus span {
    font: var(--desktop-body3-semibold);
    opacity: .4;
  }

  .focus h1 {
    font: var(--desktop-h3);
  }

  .focus p {
    font: var(--desktop-body1-regular);
    letter-spacing: -0.002em;
  }

  .wrapper-focus img {
    inline-size: 100%;
    max-inline-size: 30.37rem;
    block-size: 23.81rem;
  }

  @media screen and (max-width: 414px) {

    .wrapper-focus {
      display: block;
      block-size: 57.75rem;
      text-align: center;
    }
    .focus {
      text-align: center;
      block-size: 21.43rem;
      margin-block-start: 0;
      margin-inline: 0;
    }
    .focus h1 {
      font: var(--mobile-h3);
    }
    .focus p {
      font: var(--mobile-body1regular);
      line-height: 29px;
    }
    .wrapper-focus img {
      inline-size: 20.5rem;
      block-size: 23.81rem;
      margin-block-start: 1.5rem;
    }
  }

  @media (min-width:768px) and (max-width: 1440px){

    .wrapper-focus {
      display: block;
      block-size: 57.75rem;
      text-align: center;
      margin-block-start: 7rem;
    }
  }
`;

function CutFocus() {
  return (
    <CutFocusStyled>
      <div className="wrapper-focus">
        <div className="focus">
          <span>EL ENFOQUE CORTES</span>
          <h1>Deleite a los invitados con una programación moderna</h1>
          <p>
            El tiempo es un bien preciado. Calel es una manera cortés de
            reservar reuniones y otras citas, porque programar con unos pocos
            clics ahorra el máximo de tiempo para todos.
          </p>
        </div>
        <img src="../images/iphone.png" alt="iphone" title="iphone"></img>
      </div>
    </CutFocusStyled>
  );
}

export default CutFocus;

/*IDEA DE COMO CREAR ESTE COMPONENTE: 
Primero hacemos los marcos del contenedor y luego le damos un
display FLEX para que cuando tengamos los dos DIVS en linea
podamos usar el align-items: flex-start luego de eso los items
se pegaran al techo del contenedor y de ahi le agregamos
margin-block-start a ambos DIVS dependiendo lo requerido por FIGMA  */
