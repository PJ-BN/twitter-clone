import React  from 'react';
import Navbar from '../navbar-logged/Navbar';
import CentralNavbar from '../home/home';
import SearchNavbar from '../home/search_side';
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
                    <CentralNavbar />
                </div>
                <div>

                
                    <SearchNavbar />
                </div>
                
            </div>
        </div>
    )
}

export default Navigation2