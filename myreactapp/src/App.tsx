// App.tsx
import React from 'react';
import Navigation from './components/navigation/Navigation';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import PerfectScrollbar from 'react-perfect-scrollbar';



const App: React.FC = () => {
  return (
    <Router>

      <div>
      {/* <PerfectScrollbar> */}
          <Routes>

            <Route path="*"  element ={<Navigation />}>
                  
            </Route>
          
          </Routes>
      {/* </PerfectScrollbar> */}
        
      </div>
    </Router>
  );
};

export default App;
