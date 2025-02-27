import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Headers from './components/Header';
import Home from './pages/Home';
import About from './pages/About/About';
import CartDetails from './components/CardDetails/CardDetails';
import FooterBottom from './components/FooterBottom/FooterBottom';
import { Provider } from 'react-redux';
import store from './Store';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Membership from './pages/Membership/Membership';
import SignIn from './pages/SignIn/SignIn';
import Inspiration from './pages/Inspiration/Inspiration';
import InspirationDetails from './components/inspDetails/InspirationDetails';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Headers />
          </motion.div>

          <motion.main
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/inspiration/" element={<Inspiration />} />
              <Route path="/cartDetails/:id" element={<CartDetails addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/inspirationDetails/:id" element={<InspirationDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>

          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FooterBottom />
          </motion.div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;