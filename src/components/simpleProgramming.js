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
        <img src="../images/compass.png" alt="compass" title="Compass"></img>
        <img src="../images/drop.png" alt="drop" title="Drop"></img>
        <img src="../images/ebay.png" alt="ebay" title="Ebay"></img>
        <img src="../images/lazboy.png" alt="lazboy" title="LazBoy"></img>
        <img src="../images/gartner.png" alt="gartner" title="Gartner"></img>
        <img src="../images/twilio.png" alt="twilio" title="Twilio"></img>
      </div>
    </SimpleProgrammingStyled>
  );
}

export default SimpleProgramming;
