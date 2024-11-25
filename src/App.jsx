import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertySearch from './pages/PropertySearch';
import ContactUs from './pages/ContactUs';
import OnlineService from './pages/OnlineService';
import Officials from './pages/Officials';
import Courts from './pages/Courts';
import Parks from './pages/Parks';
import Community from './pages/Community';
import Connect from './pages/Connect';
import '@fontsource/roboto'; // Defaults to weight 400.
import '@fontsource/roboto/700.css'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans" style={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: "18px" }}>
        <Home />
        <Navbar />
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/" element={<OnlineService />} />
          <Route path="/officials-departments" element={<Officials />} />
          <Route path="/courts-sheriff" element={<Courts />} />
          <Route path="/parks-recreation" element={<Parks />} />
          <Route path="/community-resources" element={<Community />} />
          <Route path="/connect-with-us" element={<Connect />} />
          <Route path="/property-search" element={<PropertySearch />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
