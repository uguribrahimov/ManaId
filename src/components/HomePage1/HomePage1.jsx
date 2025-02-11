import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage1.css';  // CSS dosyasını dahil edin
import data from "../../../public/data"; // Doğru yolu kontrol edin

const HomePage1 = () => {
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    setHomepageData(data.homepage);
  }, []);

  const handleAreaClick = (title) => {
    alert(`Tıkladığınız alan: ${title}`);
  };

  if (!homepageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid d-flex flex-column flex-md-row vh-100">
      <div className="col-12 col-md-4 d-flex flex-column justify-content-center p-4">
        <p className="text-muted mb-2">
          <span className="bg-dark text-white rounded-pill px-2 py-1">
            {homepageData.discountText}
          </span>{" "}
          {homepageData.discountDescription}
        </p>
        <h1 className="h3 fw-bold mb-4">{homepageData.title}</h1>
        <p className="mb-4 text-secondary">{homepageData.description}</p>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-dark rounded px-4 py-2">
            {homepageData.getStartedButtonText}
          </button>
          <button className="btn btn-outline-secondary rounded px-4 py-2">
            {homepageData.manaIntroductionButtonText}
          </button>
        </div>
      </div>
      <div className="col-12 col-md-8 d-flex justify-content-center align-items-center position-relative overflow-hidden">
        <img
          src={homepageData.imageURL}
          alt="Furniture Map"
          useMap="#furniture-map"
          className="w-100 h-100 object-fit-cover custom-radius"
        />
        <map name="furniture-map">
          {homepageData.mapAreas.map((area, index) => (
            <area
              key={index}
              shape="circle"
              coords={area.coords}
              href="#"
              alt={area.alt}
              onClick={(e) => {
                e.preventDefault();
                handleAreaClick(area.title);
              }}
              className="position-absolute"
            />
          ))}
        </map>
      </div>
    </div>
  );
};

export default HomePage1;
