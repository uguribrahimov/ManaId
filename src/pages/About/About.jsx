import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './About.module.css';

const AboutPage = () => {
  // Kart verilerini tanımla
  const cards = [
    {
      id: 1,
      logo: 'public/assets/about2.jpg',
      description: 'Winner & "Best Office Interior Indonesia" for "Office Interior", Asia Pacific Property Awards (Londok, UK) 2023',
    },
    {
      id: 2,
      logo: 'public/assets/1a08865a98c4a4168ddc07734f0c16a8.png',
      description: 'Top 24 world firms shortlisted for 2022 Firm of The Year Award, Architecture MasterPrize, Los Angeles, USA',
    },
    {
      id: 3,
      logo: 'public/assets/7e354834098f0441919716b3d1a09216.png',
      description: 'Honorable Mention in Interior Design & Industrial Interior Design Architecture Masterprize (Los Angeles, USA), 2022',
    },
    {
      id: 4,
      logo: 'public/assets/9ff4c4ae7eeff7979f6e3ea75864f16f.png',
      description: 'Honorable Mention in Interior Design & Industrial Interior Design Architecture Masterprize (Los Angeles, USA), 2022',
    },
    {
      id: 5,
      logo: 'public/assets/955b682cfb0df5a7ed31f244282f6d81.png',
      description: 'Winner of Interior Design/Worksplaces Category from Outstanding Property Award London (London, UK), 2022',
    },
    {
      id: 6,
      logo: 'public/assets/e113b5782b7acb8b34d78c3c99f75371.png',
      description: 'Winner of "Interior Design Category", Muse Design Awards (New York, USA), 2021',
    },
    {
      id: 7,
      logo: 'public/assets/fdaf83a20b0c2d6ebd8cebd51f450d49.png',
      description: 'Platinum Greenship Interior Space (New York, USA), 2021',
    }
  ];

  return (
    <div>
      {/* First Section: Background and Text */}
      <div className={styles.aboutContainer}>
        <div className={styles.overlay}>
          <div className="text-center p-5">
            <h1 className={styles.h1}>About Us</h1>
            <p className={styles.p}>
              Mana.Id first became inspired by the world of decorative style while growing up in the 1970s along the shoreline of the French Riviera...
            </p>
            <p className={styles.p}>
              In the years since then, a singular vision and uncompromising sense of style...
            </p>
            <p className={styles.p}>
              An international lifestyle allows Christopher to view the world through a critically constructive eye...
            </p>
          </div>
        </div>
      </div>

      {/* Second Section: Cards */}
      <section className="container py-5">
        <div className="row">
          {/* İlk 4 kartı render et */}
          {cards.slice(0, 4).map(card => (
            <div key={card.id} className="col-md-3 mb-4"> {/* 4 kart üstte */}
              <div>
                <img 
                  src={card.logo} 
                  className="card-img-top d-block mx-auto mb-3" 
                  alt={`Logo ${card.id}`} 
                  style={{ width: '100%', height: '250px', objectFit: 'contain' }} // Resim boyutlarını eşitle
                />
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <p className="card-text" style={{ fontSize: '0.85rem' }}>{card.description}</p> {/* Font size küçültüldü */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {/* Kalan 3 kartı render et */}
          {cards.slice(4).map(card => (
            <div key={card.id} className="col-md-4 mb-4"> {/* 3 kart altta */}
              <div>
                <img 
                  src={card.logo} 
                  className="card-img-top d-block mx-auto" 
                  alt={`Logo ${card.id}`} 
                  style={{ width: '100%', height: '250px', objectFit: 'contain' }} // Resim boyutlarını eşitle
                />
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <p className="card-text" style={{ fontSize: '0.85rem' }}>{card.description}</p> {/* Font size küçültüldü */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;