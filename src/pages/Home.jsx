import React from 'react';
import { motion } from 'framer-motion';
import HomePage1 from '../components/HomePage1/HomePage1';
import HomePage3 from '../components/HomePage3/HomePage3';
import HomePage4 from '../components/HomePage4/HomePage4';

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.4 }}
      >
        <HomePage1 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.4 }}
      >
        <HomePage3 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.4 }}
      >
        <HomePage4 />
      </motion.div>
    </div>
  );
};

export default Home;
