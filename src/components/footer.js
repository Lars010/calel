import styled from "styled-components";

const FooterStyled = styled.div`
  .footer-wrapper {
    block-size: 35.06rem;
    /* border: 1px solid blue; */
  }

  .content {
    display: flex;
    margin-block-start: 8rem;
  }

  .content img {
    inline-size: 100%;
    max-inline-size: 10.35rem;
    block-size: 2.5rem;
  }

  .menu-footer {
    display: block;
    inline-size: 100%;
    max-inline-size: 11.26rem;
    /* border: 1px solid blue; */
  }

  .menu-footer h5 {
    font: var(--desktop-h5-black);
    margin-block-start: 0;
    margin-block-end: 1.5rem;
  }

  .menu-footer p {
    font: var(--desktop-body2-regular);
    margin-block-end: 1.5rem;
  }

  .developers {
    inline-size: 100%;
    max-inline-size: 12.06rem;
    block-size: 7.5rem;
  }

  .developers h5 {
    font: var(--desktop-h5-black);
    margin-block-start: 0;
    margin-block-end: 1.5rem;
  }

  .developers p {
    font: var(--desktop-body2-regular);
  }

  .footer-details {
    display: flex;
    margin-inline-start: 1.5rem;
    gap: 1.5rem;
  }

  @media screen and (max-width: 414px) {

    .content {
      display: grid;
      flex-direction: column;
      place-items: center;
    }
    .content img {
      margin-block-end: 1.5rem;
    }
    .footer-details {
      display: grid;
      flex-direction: column;
    }
  }

  @media (min-width:768px) and (max-width: 1440px){

    .content {
      display: grid;
      flex-direction: column;
      place-items: center;
    }
    .content img {
      margin-block-end: 1.5rem;
    }
    .footer-details {
      display: grid;
      flex-direction: column;
    }
    .footer-wrapper {
      block-size: 100%;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-wrapper">
        <div className="content">
          <img src="../images/calendly.png" alt="calel" title="Calel"></img>
          <div className="footer-details">
            <div className="about menu-footer">
              <h5>Acerca de</h5>
              <p>Acerca de Calendry</p>
              <p>Póngase en contacto con el equipo de ventas</p>
              <p>Vacantes</p>
              <p>Seguridad</p>
              <p>Privacidad</p>
              <p>Terminos</p>
            </div>
            <div className="asistance menu-footer">
              <h5>Asistencia</h5>
              <p>Centro de ayuda</p>
              <p>Tutoriales en video</p>
            </div>
            <div className="developers">
              <h5>Desarrolladores</h5>
              <p>Herramientas de desarrollo</p>
            </div>
            <div className="solutions menu-footer">
              <h5>Soluciones</h5>
              <p>Exito de clientes</p>
              <p>Ventas</p>
              <p>Contratacion</p>
              <p>Educacion</p>
              <p>Particulares</p>
            </div>
            <div className="popular-functions menu-footer">
              <h5>Funciones populares</h5>
              <p>Exito en clientes</p>
              <p>Ventas</p>
              <p>Contratacion</p>
              <p>Educacion</p>
              <p>Particulares</p>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;
