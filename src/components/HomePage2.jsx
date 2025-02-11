import React, { useEffect, useState } from "react";
import data from "../../public/data"; // Doğru yolu kontrol edin
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage2 = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(data.features);
  }, []);

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column align-items-center overflow-hidden">
      <div className="p-5 w-75 d-flex align-items-center justify-content-between">
        <h1>Benefits Mana <br /> Membership</h1>
        <div className="d-flex flex-column">
          <p className="text-muted">
            We provide excessive benefits for members who <br />
            subscribe every month with mana id, because we <br />
            want the community to find out more.
          </p>
          <button className="btn btn-primary rounded">Start Membership</button>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-start flex-wrap p-4 w-100 gap-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`d-flex flex-column align-items-center rounded ${feature.id === 2 ? 'mt-4' : ''}`}
            style={{ width: '350px', flexShrink: '0', marginBottom: '20px' }}
          >
            <div className="d-flex flex-column align-items-center w-100">
              <img
                src={feature.image}
                alt={feature.title}
                className="img-fluid"
                style={{ height: '230px', objectFit: 'cover', filter: 'brightness(0.8)' }}
              />
              <div
                className={`d-flex flex-column justify-content-center p-3 text-white fw-bold ${feature.id === 2 ? 'order-first' : 'order-last'}`}
              >
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{feature.title}</h3>
                <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage2;
