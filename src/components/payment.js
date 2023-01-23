import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PaymentStyled = styled.div`

:root {
  --black: #030102;
  --grey: #9ea8bd;
  --grey2: #e2e6ee;
  --primary: #ca097a;
  --white: #ffffff;
  --text1regular: 400 1rem/normal Roboto;
  --heading1: 700 1.25rem/normal Roboto;
  --text2regular: 300 0.75rem/normal Roboto;
}


h1 {
  font: var(--heading1);
}

p {
  font: var(--text2regular);
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.container {
  inline-size: 22.5rem;
  block-size: 37rem;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #08003B;

  padding: 30px 10px;
}

.card {
  max-width: 500px;
  margin: auto;
  color: black;
  background: white;
  border-radius: 20px;
  padding: 1.9rem;
  box-shadow: 0px 42px 34px rgba(82, 67, 194, 0.295755);
  margin-block-start: 2rem;
}

.card .logo {
  display: block;
  /* border: 1px solid red; */
  text-align: center;
  margin-block-end: 1.5rem;
}

.logo img {
  border: 1px solid green;
  border-radius: 50%;

}

.container .h8 {
  font-size: 30px;
  font-weight: 800;
  text-align: center;
}

.btn.btn-primary {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  padding: 0 15px;
  background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA 51%, #77A1D3 100%);
  border: none;
  transition: 0.5s;
  background-size: 200% auto;
  cursor: pointer;

}


.btn.btn.btn-primary:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

.form-control {
  color: black;
  border: 2px solid #E2E6EE;
  inline-size: 18.7rem;
  height: 2.5rem;
  padding-left: 20px;
  vertical-align: middle;
  margin-block: 1.5rem;
}


.form-control:focus {
  border: 2px solid #2ddad1;
  box-shadow: 0px 4px 18px rgba(158, 168, 189, 0.31);
  border-radius: 10px;
}

.text {
  font-size: 14px;
  font-weight: 600;
}

::placeholder {
  font-size: 14px;
  font-weight: 600;
  color: #9EA8BD;
}

.input-card {
  display: flex;
  position: relative;
  justify-content: flex-end;
}

.input-card img {
  display: flex;
  position: absolute;
  top: 40px;
  margin-inline-end: .8rem;
}

.card-info {
  display: flex;
  /* border: 1px solid red; */
  position: relative;
  justify-content: flex-end;
  align-items: center;
  
}

.card-info img {
  display: flex;
  position: absolute;
  margin-inline-end: .8rem;
  /* right: 8px;
  bottom: 25px; */
}

.col-6 {
  display: flex;
}

.pt-1 {
  inline-size: 9rem;
  margin-inline-end: .75rem;
}

.pt-2 {
  inline-size: 9rem;
}

.column-12 {
  text-align: center;
}

.notice {
  font: var(--text2regular);
  margin-block-start: .5rem;
}

.home button {
    margin-block-start: 1rem;
    inline-size: 4rem;
    block-size: 2rem;
    border-radius: 28px;
    cursor: pointer;

}

`

function Payment() {
    return (
        <PaymentStyled>
           <div className='home'>
           <Link to='/'><button>Home</button></Link>
           </div>

            <div className="container p-0">
    <div className="card px-4">
      <div className="logo">
        <img src="./images/MOTIVEX.png" alt="" width="48px" height="48px"/>
          <p className="h8 py-3">Payment Details</p>
      </div>
        <div className="row gx-3">
            <div className="col-12">
                <div className="d-flex flex-column">
                    <p className="text mb-1">Person Name</p>
                    <input className="form-control mb-3" type="text" placeholder="Alex Montoya" required />
                </div>
            </div>
            <div className="col-12">
                <div className="d-flex flex-column">
                    <p className="text mb-1">Card Number</p>
                    <div className="input-card">
                      <input className="form-control mb-3 t1" type="text" placeholder="1234 5678 435678" required />
                      <img src="./images/credit-card.svg" alt="Credit Card" width="14px" height="14px" />
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="d-flex flex-column">
                    <p className="text mb-1">Expiration date</p>
                    <input className="form-control mb-3 pt-1" type="tel" placeholder="MM/YY" minLength="5" maxLength="5" pattern="/{5}/" required />
                </div>
           
                <div className="d-flex2 flex-column">
                    <p className="text mb-1">CVV/CVC</p>
                    <div className="card-info">
                      <input className="form-control mb-3 pt-2 " type="tel" placeholder="***" maxLength="3" required />
                      <img src="./images/info.svg" alt="Info" width="14" height="14" />
                    </div>
                </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                  <p className="text mb-1">Address</p>
                  <input className="form-control mb-3" type="text" placeholder="Av.morelos #123" required />
              </div>
          </div>
            <div className="column-12">
                <div className="btn btn-primary mb-3">
                    <span className="ps-3">Confirmar pago</span>
                </div>
                <span className="notice">Verify that this information is correct</span>
            </div>
        </div>
    </div>
</div>

        </PaymentStyled>
    )
}

export default Payment
