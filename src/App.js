import React, {/*{useEffect}*/}from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Landing_Page from './Components/Landing_Page/Landing_Page';
function App() {
  return (
    <div className='App'>
         {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
           <Landing_Page/>
           <Routes>
               {/* Set up the Routes for different pages */}
               
           </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
