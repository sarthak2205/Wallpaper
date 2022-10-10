import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from './Pages/Homepage/Homepage';
import Navbar from './Components/Navbar';
import MobileNavBar from './Components/MobileNavBar';
import ContactUs from './Pages/ContactUs/ContactUs';
import Feature from './Pages/Feature';

function App() {
  return (
    <Router>
      <div className='max-w-screen max-h-screen'>
      <div className='px-0 md:px-12 mx-auto md:pt-6'>
        <div className='hidden md:block'>
          <Navbar/>
        </div>
        <div className='block md:hidden'>
          <MobileNavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/features" element={<Feature />} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
