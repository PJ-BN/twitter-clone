import React, { useState, FormEvent } from 'react';
import './login.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';

// interface LoginPageProps {}

interface ChildProps {
  onDataToParent: (data: string, username:string) => void;
}

const LoginPage: React.FC<ChildProps> = ({onDataToParent}) => {
  // State to manage the form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState('')
  const navigate = useNavigate();

  const sendDataToParent = (data: string, username :string) => {
    // Call the callback function provided by the parent
    onDataToParent(data, username);
    navigate('/home');
  };

  const addCookie = (key:string , value:string) => {
    // Set a cookie with the key-value pair and optional attributes
    Cookies.set(key, value, { expires: 1, path: '/' });
  };


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
      if(response.data['status']==="success")
      {
        addCookie("username", data.key1)
        sendDataToParent(response.data, data.key1)
        
        
      }else{

        setUser("Invalid Username or Password")
      }
      
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
      <div>
        {user}
      </div>
    </div>
  );
};

export default LoginPage;
