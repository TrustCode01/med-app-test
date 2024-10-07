import React,{useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page'

function App() {
  return (
    <div className='App'>
         {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
           <Navbar />
           <landing_Page/>
           <Routes>
               {/* Set up the Routes for different pages */}
               <Route path="/" element={<Landing_Page/>}/>
           </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
