import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestApi: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/test')
    .then(response =>{ setData(response.data)})
      
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data)

  return (
    <div>
       {data ? (
        <div>
          <p>Age: </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TestApi;
