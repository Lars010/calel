import styled from "styled-components";

const BitlyStyled = styled.div`
  .bitly-wrapper {
    display: flex;
    block-size: 39.81rem;
    /* border: 1px solid blue; */
  }

  .bitly-wrapper img {
    inline-size: 100%;
    max-inline-size: 25rem;
    block-size: 25rem;
  }

  .bitly-description {
    inline-size: 100%;
    max-inline-size: 43.12rem;
    block-size: 31.81rem;
    margin-inline-start: 6.87rem;
    /* border: 1px solid blue; */
  }

  .bitly-description img {
    inline-size: 100%;
    max-inline-size: 11.81rem;
    block-size: 11.81rem;
    float: right;
  }

  .bitly-description span {
    font: var(--desktop-body3-semibold);
    opacity: .4;
  }

  .bitly-description h4 {
    font: var(--desktop-h4);
    margin-block-start: 2rem;
    margin-block-end: 2rem;
  }

  .bitly-description p {
    font: var(--desktop-h5-black);
    color: var(--primary);
    margin: 0;
  }

  @media screen and (max-width: 414px) {

    .bitly-wrapper {
      display: grid;
      flex-direction: column;
      place-items: center;
      block-size: 67.18rem;
    }
    .bitly-wrapper img {
      inline-size: 20.5rem;
      block-size: 20.5rem;
    }
    .bitly-description h4 {
      font: var(--mobile-h4);
    }
    .bitly-description img {
      inline-size: 10.83rem;
      block-size: 10.83rem;
    }

  }

`;

function Bitly() {
  return (
    <BitlyStyled>
      <div className="bitly-wrapper">
        <img src="../images/bitly1.png" alt="bitly" title="Bitly"></img>
        <div className="bitly-description">
          <span>BITLY</span>
          <h4>
            Los representantes de desarrollo de ventas no solo acaban con todo
            un calendario lleno de clientes potenciales con los que hablar, sino
            que estos clientes potenciales asisten más a las reuniones.
          </h4>
          <p>Dave Rotholz</p>
          <img src="../images/imagen-bitly.png" alt="bitly-imagen" title="icono de bitly"></img>
        </div>
      </div>
    </BitlyStyled>
  );
}

export default Bitly;
