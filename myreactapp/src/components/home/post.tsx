import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

interface tweet  {
    date :Date| null;
    content:string| null;
    user:string| undefined;
}
const Post = (tweet: any) => {
    const date =new Date(tweet['id'])
    // const [response, setResponse] = useState()
    
    const data:tweet = {
        date:date,
        content:tweet['content'],
        user:Cookies.get("username")
    }
    
    console.log(data)
    try {
        axios.post('/api/tweet/',data)
        .then(response =>{console.log(response.data)})

        
    } catch (error) {
        console.log('Error!')
        
    } 
   

}

export default Post;