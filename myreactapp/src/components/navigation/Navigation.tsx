// Navigation.tsx
import React  , {useState} from 'react';
import { Route, Routes} from 'react-router-dom';
import Cookies from 'js-cookie';


import './Navigation.css'; // Import the CSS file
import Navigation1 from './Navigation1';
import Navigation2 from './Navigation2';

interface ParentState {
  dataFromChild: string | null,
  username :string|null
}

const Navigation: React.FC = () => {

  // const [status, setStatus] = useState<React.ReactNode |>([]);
  
  const [logindetail, setLogindetail] = useState<ParentState>({
    dataFromChild: null,
    username: null
  });
  const handleDataFromChild = (data: string, username:string) => {
    console.log(`Data received in ParentComponent: `, data);
    console.log(typeof data)
    if(typeof data === "object")
    {

      setLogindetail({ dataFromChild: data["status"], username: username });
      console.log(data['status'])
    }
    
  };
  console.log(logindetail)

  const getCookie= () =>{
    let cookie = Cookies.get();
    console.log(cookie)
    return Object.keys(cookie)
  } 
  
  const cookieData = getCookie()
  console.log(cookieData[0])

  if(Object.values(logindetail)[1] === null && cookieData[0]=== "username" ){
    console.log("true")
    setLogindetail({ dataFromChild:"success", username: cookieData[0] });
  }
  // if(cookieData.length > 1 ){

  // }


  console.log(cookieData)
  

  // Cookies.remove("sam1")

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