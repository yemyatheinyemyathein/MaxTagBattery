// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/Home'; // Sample Page
import Outlets from './pages/Outlets';
import UserGuideLine from './pages/UserGuideLine';
import OrderTracking from './pages/OrderTracking';
import WishList from './pages/WishList';
import RepairService from './pages/RepairService';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import TermsAndCondition from './pages/TermsAndCondition';
import Faq from './pages/Faq';
import MaxTag from './pages/MaxTag';
import ShopAll from './pages/ShopAll';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import RechargeableBattery from './pages/RechargeableBattery';
import DashboardHolder from './pages/DashboardHolder';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Default Route */}
          <Route path="/outlet-2" element={<Outlets />} />
          <Route path="/user-guide" element={<UserGuideLine />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/repair" element={<RepairService />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-conditions" element={<TermsAndCondition />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/maxtag" element={<MaxTag />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/rechargeable-battery-page" element={<RechargeableBattery />} />
          <Route path="/dashboard-holder" element={<DashboardHolder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
