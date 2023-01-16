import styled from "styled-components";

const OnDemandCodeStyled = styled.div`
  .programming-ondemand {
    inline-size: 100%;
    max-inline-size: 75rem;
    block-size: 24.12rem;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-block-end: 8rem;
    /* border: 1px solid blue; */
  }

  .programming-ondemand img {
    inline-size: 100%;
    max-inline-size: 30.25rem;
    block-size: 21.18rem;
  }

  .more-conections {
    inline-size: 100%;
    max-inline-size: 43.06rem;
    block-size: 24.12rem;
    /* border: 1px solid blue; */
  }

  .more-conections span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16.48px;
    line-height: 28px;
    letter-spacing: -0.001em;
    opacity: 0.4;
  }

  .more-conections h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 47.0858px;
    line-height: 57px;
    letter-spacing: -0.004em;
    margin-block-end: 2.35rem;
    margin-block-start: 2.35rem;
  }

  .more-conections p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 21.1886px;
    line-height: 42px;
    letter-spacing: -0.002em;
    margin: 0;
  }

  @media screen and (max-width: 414px) {

    .programming-ondemand {
      display: block;
      block-size: 47.17rem;
      margin-block-end: 0;
      text-align: center;
    }

    .programming-ondemand img {
      inline-size: 20.5rem;
      block-size: 14.35rem;
    }
    .more-conections {
      block-size: 27.31rem;
      text-align: center;
      margin-block-start: 1.5rem;
    }
    .more-conections h1 {
      font: var(--mobile-h3);
      margin-block: 1.5rem;
    }
    .more-conections p {
      font: var(--mobile-body1regular);
      letter-spacing: -0.002em;
      align-self: stretch;
    }

  }
`;

function OnDemandCode() {
  return (
    <OnDemandCodeStyled>
      <div className="programming-ondemand">
        <img
          src="../images/code-ondemand.png"
          alt="ondemand"
          title="Programming on Demand"
        ></img>
        <div className="more-conections">
          <span>PROGRAMACIÓN BAJO DEMANDA</span>
          <h1>Haga más contactos y reduzca las cancelaciones</h1>
          <p>
            Los clientes potenciales pueden programar reuniones con tan solo
            unos clics, siempre en el momento oportuno. Y se reducen las
            cancelaciones porque la reprogramación es fácil, rápida y según sus
            propias condiciones.
          </p>
        </div>
      </div>
    </OnDemandCodeStyled>
  );
}

export default OnDemandCode;
