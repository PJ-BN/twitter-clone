import React, {  useState , useEffect} from "react";
import { Link } from 'react-router-dom';

import axios from 'axios';
// import Cookies from "js-cookie";

import './profile.css'
import Tweet from "../tweet/tweet";
import Cookies from "js-cookie";
// import WebSocketComponent from "../WebSocketComponent";
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

    const [tweetCount, setTweetCount] = useState(0)
    const [followerCount , setFollowerCount]= useState(0)
    const [followingCount, setFollowingCount] = useState(0)
    
    const [hasFetched, setHasFetched] = useState(false);

    const [followButtonValue, setFollowButtonValue] = useState<string>()
    
    // sending post request to server
    useEffect(() => {
      const currentUrl = window.location.href;
      
      // Split the URL by '/'
      const urlParts = currentUrl.split('/');
      
      // Get the last part of the URL (after the last '/')
      const lastPart = urlParts[urlParts.length - 1];
      
      const senddata ={
          key1: lastPart,
          key2:Cookies.get('username')
      }
      console.log("the last part is :"+senddata.key1)

        axios.post('/api/profile/',senddata)
        .then(response =>{ setData(response.data.data)
        setHasFetched(true)
        setTweetCount(response.data.tweet_count)
        setFollowerCount(response.data.count_follower)
        setFollowingCount(response.data.count_following)
        setFollowButtonValue(response.data.follow_button)
        })
          
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
        followers :  followerCount,
        following :  followingCount,
        avatar : "https://i.stack.imgur.com/l6Fuv.png?g=true",
        tweets: tweetCount
    }

    const childUser = {
      user:user?.name?? '',
      username:user?.username?? ''
    }

    const tweetDisplay  = () =>{
      if(data){

        return(
          <div>
            <Tweet user={childUser} fetched = {hasFetched} startpage={0} />
          </div>
        )
      }
    }

    const followButton = () =>{
      const followData = {
        follow: user.username,
        username: Cookies.get("username"),
        follow_button: followButtonValue
      }
      console.log(followData)
      axios.post('/api/follow/',followData)
      .then(response =>{ 
        console.log(response.data)
        setFollowButtonValue(response.data.follow_button)
      })
        
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

   const editFollow = () =>{
    if(user.username === Cookies.get("username")){
      return(
        <div >
          <button className="follow-edit-button">Edit Profile</button>

        </div>
      )
    }
    else{
      return(
        <div>
          <button className="follow-edit-button" onClick={followButton}>{followButtonValue}</button>

        </div>
      )
    }
   }
   console.log(" follow button :"+followButtonValue)

    
    

   

  console.log(data)
    return(
        <div className="profile-container">
        <div className="profile-header">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <h1>{user.name}</h1>
          <div className="user-edit-follow">

          <p>@{ user.username}</p>
           {editFollow()}
          </div>
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
        <div>
          {/* <WebSocketComponent /> */}
        </div>
        {/* Additional content for tweets, media, etc. can be added here */}
        <div>
          {tweetDisplay()}
        </div>

      </div>
    )
}

export default Profile;