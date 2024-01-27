// SignInPage.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import './SignInPage.css';

interface ChildProps {
  onDataToParent: (data: string, username:string) => void;

}

const SignInPage: React.FC<ChildProps> = ({onDataToParent}) => {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const navigate = useNavigate();


  
  //  Interface is used here to define the type of data that are to the server
  interface MyData {
    key1: string;
    key2: string;
    key3: string;
    key4: string;
    key5: string;
    key6: string;
    key7: string;
    key8: string;
    key9: string;



  }

  const sendDataToParent = (data: string, username:string) => {
    // Call the callback function provided by the parent
    onDataToParent(data, username);
    navigate('/');
  };

  // Sending data to the server using axios

  const sendDataToDjango = async (data: MyData): Promise<void> => {
    const url = 'http://localhost:8000/api/signin';  // Replace with your Django endpoint
  
    try {
      const response = await axios.post(url, data);
      console.log('Data sent successfully:', response.data);
      sendDataToParent(response.data, data.key1)

    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  
  
  
  // Waiting till the POST request is performed

  const HandleSignIn = (e: FormEvent) => {
    e.preventDefault();
    
    // Defining signin data to interface 
    const myData: MyData = {
      key1: UserName,
      key2: Password,
      key3: firstName,
      key4: lastName,
      key5: email,
      key6: phoneNumber,
      key7: address,
      key8: gender,
      key9: dateOfBirth,
      
    };
    sendDataToDjango(myData);
    
    
    // Reset the form fields after submission
    setUserName('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setGender('');
    setDateOfBirth('');
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={HandleSignIn} className="signin-form">
      <label>
          Username:
          <input
            type="text"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Gender:
          <div className='gender'>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              Male
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              Female
              <input
                type="radio"
                value="other"
                checked={gender === 'other'}
                onChange={() => setGender('other')}
              />
              Other
          </div>
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
