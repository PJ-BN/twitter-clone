import React, { useState, FormEvent } from 'react';
import './login.css'; // Import the CSS file
import axios from 'axios';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  // State to manage the form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  //  Interface is used here to define the type of data that are to the server

  interface MyData {
    key1: string;
    key2: string;
  }


  // Sending data to the server using axios

  const sendDataToDjango = async (data: MyData): Promise<void> => {
    const url = 'http://localhost:8000/api/login';  // Replace with your Django endpoint
  
    try {
      const response = await axios.post(url, data);
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  // Waiting till the POST request is performed
  // Function to handle form submission
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here

    const myData: MyData = {
      key1: username,
      key2: password,
    }

    sendDataToDjango(myData);

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
