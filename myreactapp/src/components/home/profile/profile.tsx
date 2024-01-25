import React, { useEffect, useState } from "react";
import axios from 'axios';



const Profile: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/profile')
        .then(response =>{ setData(response.data)})
        
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

  console.log(data)
    return(
        <div>
            <h1>Profile Page</h1>
        </div>
    )
}

export default Profile;