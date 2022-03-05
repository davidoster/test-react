import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/login/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   React.createElement(LoginForm, { 
//       form: { id: 'myloginform', method: 'GET', action: '#'},
//       input1: { id: "email", label: "Username", type: "text" }, 
//       input2: { id: "password", label: "Password", type: "password" },  
//       button: { textGR: 'Είσοδος', textEN: 'Login' },
//       b: { someText: 'Hello', anInt: 100, someBool: false}
//   }),
//   document.getElementById('content')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
