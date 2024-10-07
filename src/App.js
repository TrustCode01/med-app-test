import React, {/*{useEffect}*/}from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login/Login'
function App() {
  return (
    <div className='App'>
         {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
           <Login />
           <Routes>
               {/* Set up the Routes for different pages */}
               
           </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
