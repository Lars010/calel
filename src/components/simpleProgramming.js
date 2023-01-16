import styled from "styled-components";

const SimpleProgrammingStyled = styled.div`
  & {
    margin-block-start: 8rem;
  }

  .reuniones {
    inline-size: 100%;
    max-inline-size: 75rem;
    /* border: 1px solid red; */
    block-size: 5rem;
  }

  .reuniones p {
    font: var(--desktop-h4);
    margin-block: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reuniones span {
    color: var(--primary);
  }

  .marcas {
    display: flex;
    gap: 6.33rem;
    margin-block-start: 4rem;
    margin-block-end: 5rem;
  }

  .marcas img {
    opacity: .4;
  }

  @media screen and (max-width: 414px) {
    & {
    margin-block-start: 5rem;
  }

  .reuniones {
    inline-size: 20.5rem;
    block-size: 6.12rem;
  }
  .reuniones p {
    font: var(--mobile-h5black);
    text-align: center;
  }
  .reuniones span {
    font: var(--mobile-h5black);
  }
.marcas {
flex-wrap: wrap;
}
.compass {
  inline-size: 7.28rem;
  block-size: 1rem;
}
.drop {
  inline-size: 1.78rem;
  block-size: 1.5rem;
}
.ebay {
  inline-size: 3.62rem;
  block-size: 1.5rem;
}
.lazboy {
  inline-size: 6.5rem;
  block-size: 1rem;
}
.gartner {
  inline-size: 6.59rem;
  block-size: 1.5rem;
}
.twilio {
  inline-size: 4.98rem;
  block-size: 1.5rem;
}

  }
`;

function SimpleProgramming() {
  return (
    <SimpleProgrammingStyled>
      <div className="reuniones">
        <p>
          Programación simplificada para más</p>
         <p>de<span> 200 000 000 </span>reuniones
        </p>
      </div>
      <div className="marcas">
        <img className="compass" src="../images/compass.png" alt="compass" title="Compass"></img>
        <img className="drop" src="../images/drop.png" alt="drop" title="Drop"></img>
        <img className="ebay" src="../images/ebay.png" alt="ebay" title="Ebay"></img>
        <img className="lazboy" src="../images/lazboy.png" alt="lazboy" title="LazBoy"></img>
        <img className="gartner" src="../images/gartner.png" alt="gartner" title="Gartner"></img>
        <img className="twilio" src="../images/twilio.png" alt="twilio" title="Twilio"></img>
      </div>
    </SimpleProgrammingStyled>
  );
}

export default SimpleProgramming;
