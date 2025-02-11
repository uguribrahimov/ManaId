import React, { useEffect, useState } from "react";
import data from "../../public/data"; // Ensure the correct path is used
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage2 = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(data.features);
  }, []);

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column align-items-center">
      {/* Hero Section */}
      <section className="hero-section w-100 py-5">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">Benefits Mana <br /> Membership</h1>
            <p className="text-muted">
              We provide excessive benefits for members who <br />
              subscribe every month with mana id, because we <br />
              want the community to find out more.
            </p>
            <button className="btn btn-primary rounded-pill px-4 py-2">Start Membership</button>
          </div>
          <div className="d-none d-md-block">
            {/* You could add an image or some graphic here if necessary */}
            <img src="../../public'assets/about.png" alt="about.png" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section w-100 py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {features.map((feature) => (
              <div key={feature.id} className="col">
                <div className="card border-0 shadow-sm rounded-3">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="card-img-top"
                    style={{ height: '230px', objectFit: 'cover' }}
                  />
                  <div
                    className={`card-body text-white d-flex flex-column justify-content-center p-4 ${feature.id === 2 ? 'order-first' : 'order-last'}`}
                  >
                    <h3 className="card-title fs-4 mb-3 fw-bold">{feature.title}</h3>
                    <p className="card-text text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage2;
