import React, {  useState , useEffect} from "react";
import { Link } from 'react-router-dom';

import axios from 'axios';
// import Cookies from "js-cookie";

import './profile.css'
// import { Routes, Route } from "react-router-dom";
// import CentralNavbar from "../home";


interface User {
  avatar: string;
  address:string;
  dateOfBirth:string;
    email:string;
    firstname:string;
    gender:string;
    id:number;
    lastname:string
    phoneNumber:string;
    username:string;
  }
  
  interface UserDisplyData {
    name:string | undefined;
    username: string | undefined;
    bio: string | undefined;
    followers: number | undefined;
    following: number | undefined;
    tweets: number | undefined;
    avatar : string | undefined;

    

}

const Profile: React.FC = ()=> {
   
    // setting interface for my cookie data
    // interface cookieData{
    //     key1:string
    // }


    // assigning the cookie data to my inerface
    
    // creating a state to store data which i get form server
    const [data, setData] = useState<User>();
    // console.log(senddata)
    
    
    // sending post request to server
    useEffect(() => {
      const currentUrl = window.location.href;
      
      // Split the URL by '/'
      const urlParts = currentUrl.split('/');
      
      // Get the last part of the URL (after the last '/')
      const lastPart = urlParts[urlParts.length - 1];
      
      const senddata ={
          key1: lastPart
      }
      console.log("the last part is :"+senddata)

        axios.post('/api/profile/',senddata)
        .then(response =>{ setData(response.data)})
          
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    // const[ user, setUser] = useState<User[]>([])

    const user:UserDisplyData ={
        name: data?.firstname + " " + data?.lastname,
        username :  data?.username,    
        bio :  data?.address ,
        followers :  0,
        following :  0,
        avatar : "https://i.stack.imgur.com/l6Fuv.png?g=true",
        tweets: 0
    }

    
    

   

  console.log(data)
    return(
        <div className="profile-container">
        <div className="profile-header">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <h1>{user.name}</h1>
          <span>@{ user.username}</span>
          <p className="bio">{user.bio}</p>
        </div>
  
        <div className="profile-stats">
          <div className="stat">
            <span>{user.tweets}</span>
            <p>Tweets</p>
          </div>
          <div className="stat">
            <span>{user.followers}</span>
            <p>Followers</p>
          </div>
          <div className="stat">
            <span>{user.following}</span>
            <p>Following</p>
          </div>
        </div>
        <br />
        {/* <hr /> */}
        <div className="menu-section">

                <Link to="/" className="nav-link " >
                Posts
                </Link>
                <Link to="/" className="nav-link " >
                Replies
                </Link>
                <Link to="/" className="nav-link ">
                Highlights
                </Link>
                <Link to="/" className="nav-link " >
                Media
                </Link>
                <Link to="/" className="nav-link " >
                Likes
                </Link>
        </div>
        <hr />
        {/* Additional content for tweets, media, etc. can be added here */}
      </div>
    )
}

export default Profile;