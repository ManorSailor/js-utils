import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
