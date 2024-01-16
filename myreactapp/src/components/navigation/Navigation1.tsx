import React  from 'react';
import { Route, Routes, Link } from 'react-router-dom';


import LandingPage from '../landing/LandingPage';
import SignUpPage from '../signin/SignInPage';
import LoginPage from '../login/LoginPage';


interface ChildProps {
onDataToParent: (data: string) => void;
}

const Navigation1: React.FC<ChildProps> = ({onDataToParent}) => {

    // const [logindetail, setLogindetail] = useState<ParentState>({
    //     dataFromChild: null,
    //   });
    
      const handleDataFromChild = (data: string) => {
        console.log(`Data received in ParentComponent: ${data}`);
        // setLogindetail({ dataFromChild: data });
        sendDataToParent(data)

      };
    // console.log(logindetail)

    const sendDataToParent = (data: string) => {
        // Call the callback function provided by the parent
        onDataToParent(data);
      };


    return (

        <div>
          <header>
            <nav>
              <button className="signup-button">
              <Link to ="/">

                 Home
              </Link>
              </button>

              <button className="signup-button">
                    <Link to ="/signup">

                    Sign up
                    </Link>
                  </button>
                  <button className="login-button">
                  <Link to ="/login">

                    Log in
                  </Link>
                  </button>

            </nav>
          </header>
          <Routes>
              <Route path="/"  element ={<LandingPage />}>
                
                </Route>
              <Route path="/signup" element = {<SignUpPage onDataToParent={handleDataFromChild}/>}>
                
              </Route>
              <Route path="/login"  element ={<LoginPage onDataToParent={handleDataFromChild}/>}>
               
              </Route>
            </ Routes>

      </div>
    );
}

export default Navigation1;

