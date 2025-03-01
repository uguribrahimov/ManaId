import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './About.module.css';

const AboutPage = () => {
  const cards = [
    {
      id: 1,
      logo: 'public/assets/about2.jpg',
      description: 'Qalib & "İndoneziyanın Ən Yaxşı Ofis Daxili Dizaynı" nominasiyasında "Ofis Daxili Dizaynı" mükafatı, Asia Pacific Property Awards (London, Böyük Britaniya) 2023.',
    },
    {
      id: 2,
      logo: 'public/assets/1a08865a98c4a4168ddc07734f0c16a8.png',
      description: '2022-ci ildə "İlin Şirkəti" mükafatı üçün dünyanın ən yaxşı 24 memarlıq firması arasında yer almışdır – Architecture MasterPrize (Los-Anceles, ABŞ).',
    },
    {
      id: 3,
      logo: 'public/assets/7e354834098f0441919716b3d1a09216.png',
      description: 'Daxili Dizayn və Sənaye Daxili Dizaynı kateqoriyalarında "Hörmətəlayiq Mükafat" – Architecture MasterPrize (Los-Anceles, ABŞ), 2022.',
    },
    {
      id: 4,
      logo: 'public/assets/9ff4c4ae7eeff7979f6e3ea75864f16f.png',
      description: 'İş yerləri üçün Daxili Dizayn kateqoriyasında qalib – Outstanding Property Award London (London, Böyük Britaniya), 2022.',
    },
    {
      id: 5,
      logo: 'public/assets/955b682cfb0df5a7ed31f244282f6d81.png',
      description: '"Daxili Dizayn" kateqoriyasında qalib – Muse Design Awards (Nyu-York, ABŞ), 2021.',
    },
    {
      id: 6,
      logo: 'public/assets/e113b5782b7acb8b34d78c3c99f75371.png',
      description: '"Daxili Dizayn / İş Məkanları" kateqoriyasında qalib – Outstanding Property Award London (London, Birləşmiş Krallıq), 2022.',
    },
    {
      id: 7,
      logo: 'public/assets/fdaf83a20b0c2d6ebd8cebd51f450d49.png',
      description: 'Platinum Greenship Interior Space (New York, USA), 2021',
    }
  ];

  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.overlay}>
          <div className="text-center p-5">
            <h1 className={styles.h1}>Bizim Haqqımızda</h1>
            <p className={styles.p}>
            Mana.Id ilk dəfə 1970-ci illərdə Fransız Rivyerasının sahilində böyüyərkən dekorativ üslub dünyasından ilham aldı...            </p>
            <p className={styles.p}>
            Mana.Id, 1970-ci illərdə Fransız Rivyerasının sahilində böyüyərkən dekorativ üslub dünyasından ilham aldı. O vaxtdan bəri, unikal baxış və güzəştsiz üslub anlayışı ilə fərqlənərək, beynəlxalq həyat tərzinin təsiri altında dünyaya tənqidi və yaradıcı bir nəzərlə yanaşır.            </p>

            <p className={styles.p}>
            O illərdən bəri, unikal bir baxış və güzəştsiz üslub anlayışı...            </p>
          </div>
        </div>
      </div>

      <section className="container py-5">
        <div className="row">
          {cards.slice(0, 4).map(card => (
            <div key={card.id} className="col-md-3 mb-4"> 
              <div>
                <img 
                  src={card.logo} 
                  className="card-img-top d-block mx-auto mb-3" 
                  alt={`Logo ${card.id}`} 
                  style={{ width: '100%', height: '250px', objectFit: 'contain' }} 
                />
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <p className="card-text" style={{ fontSize: '0.85rem' }}>{card.description}</p> 
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {cards.slice(4).map(card => (
            <div key={card.id} className="col-md-4 mb-4"> 
              <div>
                <img 
                  src={card.logo} 
                  className="card-img-top d-block mx-auto" 
                  alt={`Logo ${card.id}`} 
                  style={{ width: '100%', height: '250px', objectFit: 'contain' }} 
                />
                <div className="card-body d-flex flex-column justify-content-center text-center">
                  <p className="card-text" style={{ fontSize: '0.85rem' }}>{card.description}</p> 
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