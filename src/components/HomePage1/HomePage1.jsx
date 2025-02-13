import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage1.css'; 
import data from "../../data"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const HomePage1 = () => {
  const [homepageData, setHomepageData] = useState(null);
  const [clickedArea, setClickedArea] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setHomepageData(data.homepage);
  }, []);

  const handleAreaClick = (title) => {
    setClickedArea(clickedArea === title ? null : title);
  };

  const handleMoreInfoClick = (id) => {
    navigate(`/cartDetails/${id}`); // Redirect to cartDetails page with the specific ID
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
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src={homepageData.imageURL}
            alt="Furniture Map"
            className="w-100 h-100 object-cover custom-radius"
          />
          {homepageData.mapAreas.map((area, index) => (
            <div key={index}>
              <div
                className="dot"
                style={{
                  top: `${area.top}%`,
                  left: `${area.left}%`,
                }}
                onClick={() => handleAreaClick(area.title)}
              />
              {clickedArea === area.title && (
                <div className="area-details p-1 bg-white shadow" style={{ top: `${area.top - 20}%`, left: `${area.left + 5}%`, width: "150px" }}>
                  <img src={area.image} alt={area.title} className="w-100 h-auto mb-1" />
                  <h5 className="mb-1">{area.title}</h5>
                  <p className="mb-1">Price: {area.price}</p>
                  <button className="btn btn-primary" onClick={() => handleMoreInfoClick(area.id)}>More Info</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
