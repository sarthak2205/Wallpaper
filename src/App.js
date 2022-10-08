import logo from './logo.svg';
import './App.css';
import { Homepage } from './Pages/Homepage/Homepage';
import Navbar from './Components/Navbar';
import MobileNavBar from './Components/MobileNavBar';

function App() {
  return (
    <div className='max-w-screen max-h-screen'>
      <div className='px-8 md:px-12 mx-auto md:pt-6'>
        <div className='hidden md:block'>
          <Navbar/>
        </div>
        <div className='block md:hidden'>
          <MobileNavBar />
        </div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
