import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion'; // motion'ı import ediyoruz
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

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="">
          {/* Headers için animasyon */}
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Başlangıçta görünmez ve yukarıda
            animate={{ opacity: 1, y: 0 }} // Sayfa yüklendiğinde aşağıya doğru kayar
            transition={{ duration: 0.5 }}
          >
            <Headers />
          </motion.div>

          {/* main kısmına animasyon */}
          <motion.main
            initial={{ opacity: 0 }} // Başlangıçta görünmez
            animate={{ opacity: 1 }} // Sayfa yüklendiğinde görünür hale gelir
            transition={{ duration: 0.5 }} // 0.3 saniye süren bir fade animasyonu
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
            </Routes>
          </motion.main>

          {/* FooterBottom için animasyon */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Başlangıçta görünmez ve aşağıda
            whileInView={{ opacity: 1, y: 0 }} // Göründüğünde yukarı doğru kayar
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