import React,{ useState, useEffect }  from 'react';
import './assets/css/style.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import DewateringPump from './components/DewateringPump';
import WaterPump from './components/WaterPump';
import BoosterPump from './components/BoosterPump';
import BorewellPump from './components/BorewellPump';
import RentalServices from './components/RentalServices';
import PumpRepairingServices from './components/PumpRepairingServices';
import DewateringPumpHiringServices from './components/DewateringPumpHiringServices';
import RebaringServices from './components/RebaringServices';
import PreLoader from './components/PreLoader';


function App() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    
  <>

<HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/dewatering-pump" element={<DewateringPump />} />
            <Route path="/water-pump" element={<WaterPump />} />
            <Route path="/booster-pump" element={<BoosterPump />} />
            <Route path="/borewell-pump" element={<BorewellPump />} />
            <Route path="/rental-services" element={<RentalServices />} />
            <Route path="/pump-repairing-services" element={<PumpRepairingServices />} />
            <Route path="/dewatering-pump-hiring-services" element={<DewateringPumpHiringServices />} />
            <Route path="/repairing-services" element={<RebaringServices />} />


          </Routes>
        </HashRouter>

  </>

  );
}

export default App;
