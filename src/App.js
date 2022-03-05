import logo from './logo.svg';
import './App.css';
import React from 'react';
import {  Routes, Route, Link  } from 'react-router-dom';
import LoginForm from './components/login/Login';

// const LoginFormComponent =  React.createElement(LoginForm, { 
//         form: { id: 'myloginform', method: 'GET', action: '#'},
//         input1: { id: "email", label: "Username", type: "text" }, 
//         input2: { id: "password", label: "Password", type: "password" },  
//         button: { textGR: 'Είσοδος', textEN: 'Login' },
//         b: { someText: 'Hello', anInt: 100, someBool: false}
//     });

// console.log(LoginFormComponent);

const loginProps = { 
  form: { id: 'myloginform', method: 'GET', action: '#'},
  input1: { id: "email", label: "Username", type: "text" }, 
  input2: { id: "password", label: "Password", type: "password" },  
  button: { textGR: 'Είσοδος', textEN: 'Login' },
  b: { someText: 'Hello', anInt: 100, someBool: false}
};

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/login">Login</Link>
      </nav>
      </div>
      <Routes>
        <Route path='*' element={<div><h1>Hello</h1></div>} />
        <Route path="/login" element={<LoginForm props={loginProps} />} />
      </Routes>
    </div>
  );
}

export default App;
