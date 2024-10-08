import React, {/*{useEffect}*/}from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className='App'>
         {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
           <Landing_Page/>
           <Routes>
               {/* Set up the Routes for different pages */}
          <Route Home path='/'/>    
          <Route index element={<Landing_Page />} />
          <Route path="Sign_Up" element={<Sign_Up/>} />
          <Route path="Login" element={<Login />} />
      </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
