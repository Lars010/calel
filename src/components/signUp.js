import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpStyled = styled.div`

    & {
        display: grid;
        place-content: center;
        inline-size: 100vw;
        block-size: 100vh;
        /* border: 5px solid red; */
    }
    .titulo {
        margin-block-start: 4rem;
    }
    .titulo h2 {
        font: var(--desktop-h3);
    }
    .titulo span {
        color: var(--primary);
    }
    .contenedor {
        display: flex;
        /* border: 1px solid red; */
        justify-content: center;
        margin-block-start: 2rem;
    }
    .logo {
        display: flex;
        /* border: 1px solid red; */
        justify-content: center;
    }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: "Jost", sans-serif;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  }
  .main {
    width: 350px;
    height: 500px;
    background: var(--primary);
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
    /* margin-block-start: 9rem; */
  }
  #chk {
    display: none;
  }
  .signup {
    position: relative;
    width: 100%;
    height: 100%;
  }
  label {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  input {
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
  button:hover {
    background: #6d44b8;
  }
  .login {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: 0.8s ease-in-out;
  }
  .login label {
    color: #573b8a;
    transform: scale(0.6);
  }

  #chk:checked ~ .login {
    transform: translateY(-500px);
  }
  #chk:checked ~ .login label {
    transform: scale(1);
  }
  #chk:checked ~ .signup label {
    transform: scale(0.6);
  }
`;

function SignUp() {
  return (
    <SignUpStyled>
        <div className="logo">
        <Link to='/'><img src="../images/calendly.png" alt="logo" title="Logo Calel"></img></Link>
        </div>
        <div className="titulo">
            <h2>
                Descubre el maximo potencial de la plataforma <span>Calel</span> 
            </h2>
        </div>
        <div className="contenedor">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Login</button>
          </form>
        </div>
      </div>
        </div>
    </SignUpStyled>
  );
}

export default SignUp;
