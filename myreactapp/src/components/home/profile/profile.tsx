import React, {  useState , useEffect} from "react";
import axios from 'axios';
import Cookies from "js-cookie";

import './profile.css';


interface User {
    name:string;
    username: string;
    bio: string;
    followers: number;
    following: number;
    tweets: number;
    avatar: string;
  }
// interface ProfilePageProps {
//     user: User;
//   }

const Profile: React.FC = ()=> {
   
    // setting interface for my cookie data
    interface cookieData{
        key1:string
    }


    // assigning the cookie data to my inerface
    const senddata: cookieData ={
        key1: Cookies.get()['username']
    }

    // creating a state to store data which i get form server
    const [data, setData] = useState<any[]>([]);
    console.log(senddata)
    
    
    // sending post request to server
    useEffect(() => {
        axios.post('/api/profile/',senddata)
        .then(response =>{ setData(response.data)})
          
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    // const[ user, setUser] = useState<User[]>([])
    const user:User = {
        name: "Prajwal Bhandari",
        username :  "Prajwal12",    
        bio :  "lol i just code" ,
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
  
        {/* Additional content for tweets, media, etc. can be added here */}
      </div>
    )
}

export default Profile;