import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/globalStyles';
import Payment from './components/payment';
import SignUp from './components/signUp';
import PricesPage from './components/pricesPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/prices',
    element: <PricesPage />
  },
  {
    path: '/payment',
    element: <Payment />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <GlobalStyles />
    <RouterProvider router={router} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
