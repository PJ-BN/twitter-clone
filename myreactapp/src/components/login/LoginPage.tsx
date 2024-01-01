import React, { useState, FormEvent } from 'react';
import './login.css'; // Import the CSS file

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  // State to manage the form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login to Twitter</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
