// Navigation.tsx
import React  , {useState} from 'react';
import { Route, Routes} from 'react-router-dom';


import './Navigation.css'; // Import the CSS file
import Navigation1 from './Navigation1';

interface ParentState {
  dataFromChild: string | null;
}

const Navigation: React.FC = () => {

  const [status, setStatus] = useState();

  if( status ==="")
  {
    // setStatus(<Navigation1 onDataToParent={handleDataFromChild} />)
  }

  const [logindetail, setLogindetail] = useState<ParentState>({
    dataFromChild: null,
  });

  const handleDataFromChild = (data: string) => {
    console.log(`Data received in ParentComponent: ${data}`);
    setLogindetail({ dataFromChild: data });
  };

  console.log(logindetail)
    
    return (
      <Routes>

      <Route path="*"  element ={status}>
      </Route>
      </Routes>

      

    //     <div>
    //       <header>
    //         <nav>
    //           <button className="signup-button">
    //           <Link to ="/">

    //              Home
    //           </Link>
    //           </button>

    //           <button className="signup-button">
    //                 <Link to ="/signup">

    //                 Sign up
    //                 </Link>
    //               </button>
    //               <button className="login-button">
    //               <Link to ="/login">

    //                 Log in
    //               </Link>
    //               </button>

    //         </nav>
    //       </header>
    //       <Routes>
    //           <Route path="/"  element ={<LandingPage />}>
                
    //             </Route>
    //           <Route path="/signup" element = {<SignUpPage />}>
                
    //           </Route>
    //           <Route path="/login"  element ={<LoginPage onDataToParent={handleDataFromChild}/>}>
               
    //           </Route>
    //         </ Routes>

    //   </div>
    );
  };
  
  export default Navigation;