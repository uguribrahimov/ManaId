import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/Header'
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Contact from './pages/Contact';
import CartDetails from './components/CardDetails/CardDetails';
import { Provider } from 'react-redux';
import store from './Store';



const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  return ( <Provider store={store}> 
    <Router>
      <div className="">
        <Headers />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cartDetails/:id" element={<CartDetails addToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
};

export default App;
