// Navigation.tsx
import React  , {useState} from 'react';
import { Route, Routes} from 'react-router-dom';


import './Navigation.css'; // Import the CSS file
import Navigation1 from './Navigation1';
import Navigation2 from './Navigation2';

interface ParentState {
  dataFromChild: string | null;
}

const Navigation: React.FC = () => {

  // const [status, setStatus] = useState<React.ReactNode |>([]);
  
  const [logindetail, setLogindetail] = useState<ParentState>({
    dataFromChild: null,
  });
  const handleDataFromChild = (data: string) => {
    console.log(`Data received in ParentComponent: `, data);
    console.log(typeof data)
    if(typeof data === "object")
    {

      setLogindetail({ dataFromChild: data["status"] });
      console.log(data['status'])
    }
    
  };
  console.log(logindetail)
  
  

  let result

  switch (logindetail.dataFromChild) {
    case 'success':
      result = <Navigation2  />;
      break;
   
      
    default:
      result =<Navigation1 onDataToParent={handleDataFromChild} />;
  }


  // console.log(status)
    
    return (
      <div>

      <Routes>

      <Route path="*"  element ={result}>
      </Route>
      </Routes>
      </div>

      

    );
  };
  
  export default Navigation;