import React  from 'react';
import Navbar from '../navbar-logged/Navbar';
import CentralNavbar from '../home/home';
import SearchNavbar from '../home/search_side';
import { Route, Routes } from 'react-router-dom';
import Profile from '../home/profile/profile';
// import { Route, Routes, Link } from 'react-router-dom';
interface ChildProps {
    
    }

const Navigation2: React.FC<ChildProps> = () => {

    
    // console.log(logindetail)



    return(
        <div>

            <div className='home'>
                <div className = "navbar-component">

                    < Navbar  />
                </div >
                <div className='Central-component'>
                    
                    <Routes >
                        <Route path = '/home' element = {<CentralNavbar />}></Route>
                        <Route path = '/' element = {<CentralNavbar />}></Route>

                        <Route path = '/*' element = {< Profile />}></Route>
                        <Route path = '/explore' element = {"hello"}></Route>
                        <Route path = '/notifications' element = {"hello"}></Route>
                        <Route path = '/messages' element = {"hello"}></Route>
                        <Route path = '/bookmarks' element = {"hello"}></Route>
                        <Route path = '/communities' element = {"hello"}></Route>




                    </Routes>
                </div>
                <div>
                    <Routes>
                    <Route path = '*' element = {<SearchNavbar />}></Route>
                    <Route path = '/messages' element = {"hello"}></Route>



                    </Routes>

                
                    
                </div>
                
            </div>
        </div>
    )
}

export default Navigation2