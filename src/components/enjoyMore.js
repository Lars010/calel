import styled from "styled-components";

const EnjoyMoreStyled = styled.div`
  .enjoy-wrapper {
    display: flex;
    justify-content: center;
  }

  .enjoy-title {
    text-align: center;
    inline-size: 100%;
    max-inline-size: 49.5rem;
    block-size: 25.37rem;
    margin-block-end: 8.5rem;
  }

  .enjoy-title h1 {
    font: var(--desktop-h1);
    margin: 0;
  }

  .enjoy-title p {
    font: var(--desktop-h5-medium);
    margin-block-start: 2.5rem;
  }

  .enjoy-wrapper2 {
    display: flex;
    align-items: center;
    inline-size: 100%;
    max-inline-size: 75.7rem;
    block-size: 30.31rem;
    gap: 7.87rem;
    /* border: 1px solid blue; */
    margin-block-end: 8rem;
  }

  .auto-reminder {
    inline-size: 100%;
    max-inline-size: 36.75rem;
    block-size: 20.5rem;
    /* border: 1px solid blue; */
  }

  .auto-reminder span {
    font: var(--desktop-body3-semibold);
    opacity: 0.4;
  }

  .auto-reminder h3 {
    font: var(--desktop-h3);
    margin-block-start: 2rem;
    margin-block-end: 2rem;
  }

  .auto-reminder p {
    font: var(--desktop-body1-regular);
    margin: 0;
    letter-spacing: -0.002em;
  }
`;

function EnjoyMore() {
  return (
    <EnjoyMoreStyled>
      <div className="enjoy-wrapper">
        <div className="enjoy-title">
          <h1>Dedique más tiempo a lo que hace mejor</h1>
          <p>
            Al eliminar los inconvenientes e interrupciones relacionados con la
            programación de reuniones, su día estará libre para lograr sus
            objetivos.
          </p>
        </div>
      </div>
      <div className="enjoy-wrapper2">
        <div className="auto-reminder">
          <span>GESTIÓN DE FLUJOS DE TRABAJO</span>
          <h3>Automatice recordatorios y seguimientos</h3>
          <p>
            Calel automatiza sus reuniones con flujos de trabajo y envía desde
            correos electrónicos de recordatorio hasta notas de agradecimiento,
            para que pueda centrarse en el trabajo que solo usted puede
            realizar. Es como tener un asistente, incluso si tiene un negocio
            unipersonal.
          </p>
        </div>
        <img src="../images/recordatorio.png" alt="recordatorio" title="Automatice recordatorios" ></img>
      </div>
    </EnjoyMoreStyled>
  );
}

export default EnjoyMore;
