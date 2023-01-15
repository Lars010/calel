import styled from "styled-components";

const SetMeetingsStyled = styled.div`

  .title-wrap {
    display: flex;
    justify-content: center;
  }

  .easy-meeting-title {
    inline-size: 100%;
    max-inline-size: 49.5rem;
    block-size: 23.68rem;
    text-align: center;
    margin-block-end: 2.5rem;
  }

  .easy-meeting-title h1 {
    font: var(--desktop-h2);
    margin-block-start: 0;
  }

  .easy-meeting-title p {
    font: var(--desktop-h5-medium);
  }

  .meeting-images {
    display: flex;
    gap: 8rem;
    margin-inline-start: 7.37rem;
  }

  .meeting-images img {
    margin-block-end: 2.5rem;
  }

  .wrapper-description {
    display: flex;
    gap: 1.5rem;
    margin-block-start: 2.5rem;
    margin-block-end: 2.5rem;
  }

  .meeting-description {
    /* border: 1px solid blue; */
    inline-size: 100%;
    max-inline-size: 36.75rem;
    block-size: 9.25rem;
  }

  .meeting-description h5 {
    font: var(--desktop-h5-black);
    margin: 0;
  }

  .meeting-description p {
    font: var(--desktop-body1-regular);
    margin-block-start: .5rem;
  }

  .use-calel {
    display: flex;
    justify-content: center;
    margin-block-end: 8rem;
  }

  .use-calel button {
    inline-size: 10.06rem;
    block-size: 3rem;
    border-radius: 40px;
    font: var(--desktop-buttons);
    border: 1px solid #000000;
  }
`;

function SetMeetings() {
  return (
    <SetMeetingsStyled>
      <div className="title-wrap">
        <div className="easy-meeting-title">
          <h1>
            Programe reuniones sin tanto intercambio de correos electrónicos
          </h1>
          <p>
            Calel simplifica la programación ofreciendo únicamente horarios que
            se adapten a su disponibilidad en todos sus calendarios.
          </p>
        </div>
      </div>
      <div className="meeting-images">
        <img
          src="../images/meeting.png"
          alt="meeting"
          title="Meetings in your way"
        ></img>
        <img
          src="../images/calel-meeting.png"
          alt="calel-setup"
          title="Calel Power"
        ></img>
      </div>
      <div className="wrapper-description">
        <div className="meeting-description">
          <h5>Reúnase de la forma que desee</h5>
          <p>
            Muestre disponibilidad en su horario solo los días y las horas que
            se adapten a usted. Cuando su invitado elija la hora de la reunión,
            se confirmará al instante
          </p>
        </div>
        <div className="meeting-description">
          <h5>Calel lo coordina todo</h5>
          <p>
            Las reuniones se programan sin conflictos de calendario, los
            recordatorios se envían automáticamente y reprogramar supone una
            bocana de aire fresco para todos.
          </p>
        </div>
      </div>
      <div className="use-calel">
        <button>Utilizar Calendly</button>
      </div>
    </SetMeetingsStyled>
  );
}

export default SetMeetings;
