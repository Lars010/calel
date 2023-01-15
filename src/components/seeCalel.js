import styled from "styled-components";

const SeeCalelStyled = styled.div`
  .calel-title {
    text-align: center;
    /* border: 1px solid red; */
    margin-block-end: 6rem;
  }

  .calel-title span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  .calel-title p {
    font: var(--desktop-h2);
    margin-block-start: 1.5rem;
  }

  .servicios {
    display: flex;
    border: 1px 0 0 0 solid red;
    gap: 1.5rem;
  }

  .beneficios {
    inline-size: 100%;
    max-inline-size: 24rem;
    block-size: 11.5rem;
    display: flex;
    margin-block-end: 8rem;
  }

  .beneficios h5 {
    font: var(--desktop-h5-black);
    margin-block: 0;
  }

  .beneficios p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
  }

  .beneficios span {
    background: var(--primary);
    border-radius: 90px;
    inline-size: 2rem;
    block-size: 2rem;
    color: var(--white);
    font: var(--desktop-body2-bold);
    margin-inline-end: 1rem;
  }

  .title-num {
    display: flex;
  }

  .detalles {
    inline-size: 100%;
    max-inline-size: 21rem;
    block-size: 11.5rem;
  }
`;

function SeeCalel() {
  return (
    <SeeCalelStyled>
      <div className="calel-title">
        <span>COMO FUNCIONA</span>
        <p>Ver Calel en accion</p>
        <img src="../images/calel.png" alt="calel" title="Calendly"></img>
      </div>
      <div className="servicios">
        <div className="beneficios">
          <div className="title-num">
            <span>1.-</span>
            </div>
            <div className="detalles">
            <h5>Cree sencillas reglas</h5>
          <p>
            Dígale a Calel cuáles son sus preferencias en cuanto a la
            disponibilidad y este hará el trabajao por usted.
          </p>
            </div>
        </div>
        <div className="beneficios">
          <div className="title-num">
            <span>2.-</span>
            </div>
            <div className="detalles">
            <h5>Comparta su enlace</h5>
          <p>
            Redirija a los invitados al elace de Calendly o intégrelo en sitios
            web.
          </p>
          </div>
        </div>
        <div className="beneficios">
          <div className="title-num">
            <span>3.-</span>
            </div>
            <div className="detalles">
            <h5>Reciba reservas</h5>
          <p>Cuando se elige una hora, el evento se añade en su calendario.</p>
          </div>
        </div>
      </div>
    </SeeCalelStyled>
  );
}

export default SeeCalel;
