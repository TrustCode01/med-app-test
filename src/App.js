import React, {/*{useEffect}*/}from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'; 
import DoctorCard from './Components/DoctorCard/DoctorCard';
function App() {
  return (
    <div className='App'>
         {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
           <DoctorCard/>
           <Routes>
               {/* Set up the Routes for different pages */}
          <Route Home path='/'/>    
          <Route path="Sign_Up" element={<Sign_Up/>} />
          <Route path="Login" element={<Login />} />
          <Route path="/InstantConsultation" element={<InstantConsultation />} />

      </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
