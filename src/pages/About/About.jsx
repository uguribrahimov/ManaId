import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.overlay}>
        <div className="text-center p-5">
          <h1>About Us</h1>
          <p>
          Mana.Id first became inspired by the world of decorative style while growing up in the 1970s along the shoreline of the French Riviera. Here Christopher became fascinated with the elegance intrinsic to French design, which he sees as "an effortless form that is beyond beauty".
          </p>
          <p>
          In the years since then, a singular vision and uncompromising sense of style, along with an ongoing pursuit for elegance in every piece he designs, have driven Christopher to continually redefine the aesthetics of design. 
          The result is a place at the forefront of the world's luxury furnishings market.
          </p>
          <p>
          An international lifestyle allows Christopher to view the world through a critically constructive eye that draws inspiration from everything he admires, translating into design elements that form the bedrock of today's CG vast collection. Above all else, Christopher's unique work is characterized by elegance, which forms the DNA of each design and is central to the philosophy of the brand
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
