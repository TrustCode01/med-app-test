import React, {/*{useEffect}*/}from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'; 
import FindDoctorSearchIC from './Components/InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC'
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm'
function App() {
  return (
    <div className='App'>
         {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
         <ReviewForm />
           <Notification>
           <Routes>
               {/* Set up the Routes for different pages */}
          <Route Home path='/'/>    
          <Route path="Sign_Up" element={<Sign_Up/>} />
          <Route path="Login" element={<Login />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path='FindDoctorSearchIC' element={<FindDoctorSearchIC/>}/>
      </Routes>
      </Notification>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
