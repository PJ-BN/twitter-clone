import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";

interface ProfileData {
    id :number,
    username: string,
    firstname:string,
    lastname:string,
    email:string,
    phonenumber:string,
    address:string,
    gender:string,
    dateofbirth:string

}

const Profile: React.FC = () => {
    
    interface cookieData{
        key1:string
    }

    const [data, setData] = useState<any[]>([]);
    const sendDataToDjango = async(data:cookieData): Promise<object> => {
        const url = '/api/profile/'
        try{
            const response = await axios.post(url, data);
            console.log('Data sent successfully:');
            return response.data;

        }
        catch (error) {
            console.error('Error sending data:', error);
            return {key1:"error"}
          }
    }
    const senddata: cookieData ={
        key1: Cookies.get()['username']
    }
    const responseData =sendDataToDjango(senddata)
    // setData(responseData)
    // console.log(responseData)
    responseData.then((data) =>{
        // if(typeof data === "object"){

            // for(const key in data){
            //     console.log(key)
            // }
        // }
        // console.log(data)

        console.log(data)
    })

  console.log(data)
//   console.log(Cookies.get()['username'])
    return(
        <div>
            <h1>Profile Page</h1>
        </div>
    )
}

export default Profile;