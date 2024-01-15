// App.tsx
import React from 'react';
import Navigation from './components/navigation/Navigation';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>

      <div>
        <Routes>

      <Route path="*"  element ={<Navigation />}>
                
                </Route>
        
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
