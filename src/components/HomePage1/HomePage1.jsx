import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage1.css'; 
import apiClient from "../../api"; 
import { useNavigate } from "react-router-dom";
import DotComponent from "../dotArea/dotArea"; 
import Loading from "../Loading/Loading";

const HomePage1 = () => {
  const [homepageData, setHomepageData] = useState(null);
  const [clickedArea, setClickedArea] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/homepage");
        setHomepageData(response);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const handleAreaClick = (title) => {
    setClickedArea(clickedArea === title ? null : title);
  };
  

  const handleMoreInfoClick = (id) => {
    navigate(`/cartDetails/${id}`); 
  };

  const handleClick = () => {
    navigate("/membership")
  }

  const handleClickB = () => {
    navigate("/about")
  }


  if (!homepageData) {
    return <Loading/>;
  }

  return (
    <div className="container-fluid d-flex flex-column flex-md-row vh-100">
      <div className="col-12 col-md-4 d-flex flex-column justify-content-center p-4 left-content">
        <p className="text-muted mb-2">
          <span className="bg-dark text-white rounded-pill px-2 py-1">
            {homepageData.discountText}
          </span>{" "}
          {homepageData.discountDescription}
        </p>
        <h1 className="h3 fw-bold mb-4">{homepageData.title}</h1>
        <p className="mb-4 text-secondary">{homepageData.description}</p>
        <div className="d-flex flex-wrap gap-2">
          <button onClick={() => {handleClick()}} className="btn btn-dark rounded px-4 py-2">
            {homepageData.getStartedButtonText}
          </button>
          <button onClick={() => {handleClickB()}} className="btn btn-outline-secondary rounded px-4 py-2">
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
            <DotComponent
              key={index}
              area={area}
              handleAreaClick={handleAreaClick}
              isSelected={clickedArea === area.title}
              handleMoreInfoClick={handleMoreInfoClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
