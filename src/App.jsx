import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = () => {
    axios.post('https://apis-409423.uw.r.appspot.com/login', {
      usuario: username,
      password: password,
    })
      .then(response => {
        alert(response.data); // Puedes manejar la respuesta del servidor aquí
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="button" onClick={authenticate}>
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
