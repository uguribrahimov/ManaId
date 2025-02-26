import React from 'react';
import { motion } from 'framer-motion';
import HomePage1 from '../components/HomePage1/HomePage1';
import HomePage3 from '../components/HomePage3/HomePage3';
import HomePage4 from '../components/HomePage4/HomePage4';

const Home = () => {
  return (
    <div>
      {/* HomePage1 için animasyon */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Başlangıçta görünmez ve aşağıda
        whileInView={{ opacity: 1, y: 0 }} // Göründüğünde yukarı doğru kayar ve opaklık 1 olur
        transition={{ duration: 0.4 }}
      >
        <HomePage1 />
      </motion.div>

      {/* HomePage3 için yukarıdan aşağıya animasyon */}
      <motion.div
        initial={{ opacity: 0, y: 70 }} // Başlangıçta yukarıda ve görünmez
        whileInView={{ opacity: 1, y: 0 }} // Göründüğünde aşağıya doğru kayar
        transition={{ duration: 0.4 }} // Animasyon süresi
      >
        <HomePage3 />
      </motion.div>

      {/* HomePage4 için animasyon */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Başlangıçta görünmez ve aşağıda
        whileInView={{ opacity: 1, y: 0 }} // Göründüğünde yukarı doğru kayar ve opaklık 1 olur
        transition={{ duration: 0.4 }}
      >
        <HomePage4 />
      </motion.div>
    </div>
  );
};

export default Home;
