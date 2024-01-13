// SignInPage.tsx
import React, { useState, FormEvent } from 'react';
import axios from 'axios';


import './SignInPage.css';

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  const [UserName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  
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



  }

  // Sending data to the server using axios

  const sendDataToDjango = async (data: MyData): Promise<void> => {
    const url = 'http://localhost:8000/api/signin';  // Replace with your Django endpoint
  
    try {
      const response = await axios.post(url, data);
      console.log('Data sent successfully:', response.data);
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
      key2: firstName,
      key3: lastName,
      key4: email,
      key5: phoneNumber,
      key6: address,
      key7: gender,
      key8: dateOfBirth,
      
    };
    sendDataToDjango(myData);
    
    
    // Reset the form fields after submission
    setUserName('');
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
          <div>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="other"
                checked={gender === 'other'}
                onChange={() => setGender('other')}
              />
              Other
            </label>
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
