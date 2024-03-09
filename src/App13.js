import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const users = [
    { username: 'john', password: 'pass1234' },
  
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
      setMessage('Access Granted.');
      setMessageColor('green');
    } else {
      setMessage('Access Denied.');
      setMessageColor('red');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
};

export default LoginForm;
