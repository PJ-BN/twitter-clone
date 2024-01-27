import React, {  useState , useEffect} from "react";
import axios from 'axios';
import Cookies from "js-cookie";


const Profile: React.FC = () => {
    /* 
    This is profile section.
    All data displayed in profile are done thorugh here.
    */
    
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
   

  console.log(data)
    return(
        <div>
            <h1>Profile Page</h1>
        </div>
    )
}

export default Profile;