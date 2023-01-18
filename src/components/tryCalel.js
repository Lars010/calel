import styled from "styled-components";

const TryCalelStyled = styled.div`
  .try-calel-wrapper {
    block-size: 30.5rem;
    /* border: 1px solid blue; */
    display: flex;
  }

  .try-calel {
    inline-size: 100%;
    max-inline-size: 49.5rem;
    block-size: 22.5rem;
    margin-inline-end: 10.02rem;
  }

  .try-calel h1 {
    font: var(--desktop-h1);
    margin: 0;
  }

  .try-calel p {
    font: var(--desktop-h5-medium);
    margin-block: 2.5rem;
  }

  .try-calel span {
    font: var(--desktop-body1-medium);
  }

  .try-calel-wrapper img {
    inline-size: 100%;
    max-inline-size: 15.47rem;
    block-size: 15.62rem;
  }

  @media screen and (max-width: 414px) {
    .try-calel-wrapper {
      display: grid;
      flex-direction: column;
      block-size: 48.05rem;
      place-items: center;
    }
    .try-calel {
      margin-inline: 0;
      block-size: 24.37rem;
      margin-block-start: 3rem;
    }
    .try-calel h1 {
      font: var(--mobile-h1);
    }
    .try-calel p {
      font: var(--mobile-h4);
    }
    .try-calel span {
      font: var(--mobile-body1medium);
    }
  }

  @media (min-width: 425px) and (max-width: 767px) {
    .try-calel-wrapper {
      display: grid;
      flex-direction: column;
      block-size: 48.05rem;
      place-items: center;
    }
    .try-calel {
      margin-inline: 0;
      block-size: 24.37rem;
      margin-block-start: 3rem;
    }
    .try-calel h1 {
      font: var(--mobile-h1);
      margin-inline-start: 1rem;
    }
    .try-calel p {
      font: var(--mobile-h4);
      margin-inline-start: 1rem;
    }
    .try-calel span {
      font: var(--mobile-body1medium);
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    .try-calel-wrapper {
      display: block;
      block-size: 48.05rem;
      text-align: center;
    }
  }
`;

function TryCalel() {
  return (
    <TryCalelStyled>
      <div className="try-calel-wrapper">
        <div className="try-calel">
          <h1>Pruebe Calel gratis</h1>
          <p>
            Tras su prueba de 14 días de nuestro plan Profesional, disfrute de
            la versión gratuita de Calendly para siempre.
          </p>
          <span>
            Para consultar sobre nuestros planes Enterprise, haga clic{" "}
            <b>aquí.</b>
          </span>
        </div>
        <img
          src="../images/registrese.png"
          alt="register"
          title="Registrate"
        ></img>
      </div>
    </TryCalelStyled>
  );
}

export default TryCalel;
