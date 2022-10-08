import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from './Pages/Homepage/Homepage';
import Navbar from './Components/Navbar';
import MobileNavBar from './Components/MobileNavBar';

function App() {
  return (
    <Router>
      <div className='max-w-screen max-h-screen'>
      <div className='px-8 md:px-12 mx-auto md:pt-6'>
        <div className='hidden md:block'>
          <Navbar/>
        </div>
        <div className='block md:hidden'>
          <MobileNavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />{/*
            <Route path="/" element={<Homepage />} />
<Route path="/" element={<Homepage />} />*/}
          </Routes>
        </div>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
