import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InternationalDestinations from './pages/InternationalDestinations';
import DomesticDestinations from './pages/DomesticDestinations';
import TripDetails from './pages/TripDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/holidays/international" element={<InternationalDestinations />} />
            <Route path="/holidays/domestic" element={<DomesticDestinations />} />
            <Route path="/trip-details" element={<TripDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;