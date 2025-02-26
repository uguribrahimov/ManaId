import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import DotComponent from '../dotArea/dotArea';
import styles from './inspirationDetails.module.css'; // Import CSS Module

function InspirationDetails() {
  const { id } = useParams();  
  const [cardDetails, setCardDetails] = useState(null);
  const [clickedArea, setClickedArea] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const  data  = await apiClient.get(`/inspiration/${id}`);
        setCardDetails(data);
        console.log(data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchCardDetails();
  }, [id]);

  const handleClick = () => {
    navigate("/payment")

  }


  const handleAreaClick = (title) => {
    setClickedArea(clickedArea === title ? null : title);
  };

  const handleMoreInfoClick = (id) => {
    console.log('More Info Clicked for ID:', id);
  };

  if (!cardDetails) {
    return <div>Loading...</div>;
  }

  const totalPrice = cardDetails.furniture.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price;
  }, 0);

  return (
    <div className={`container mt-5 ${styles.container}`}>
      <div className="row">
        <div className={`${styles.divv} col-12 text-center mb-4 rounded-5 position-relative`}>
          <img
            src={cardDetails.mainImages}
            className={`${styles.dotimg} img-fluid rounded-5 custom-image w-100`}
            alt="Large Image"
          />
          {cardDetails.mapAreas && cardDetails.mapAreas.map((area, index) => (
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

      <div className="row">
        <div className="col-md-8">
          <h2>{cardDetails.title}</h2>
          <p>{cardDetails.description}</p>
          <h4>Story</h4>
          <p>{cardDetails.story}</p>
        </div>

        <div className="col-md-4">
          <h3>Furniture</h3>
          <ul className={`list-unstyled ${styles.listUnstyled}`}>
            {cardDetails.furniture.map((item, index) => (
              <li key={index} className={`${styles.listItem} mb-3 d-flex align-items-center`}>
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="d-flex flex-column" style={{ width: 'calc(100% - 120px)' }}>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </div>
                <p className={`${styles.textPrimary} ms-auto`}>{item.price}</p> {/* Price is aligned to the right */}
              </li>
            ))}
          </ul>
          <div className="mt-4">
                   <h4 className="fw-bold d-flex justify-content-between">
                   <span>Total</span>
                   <span> ${totalPrice.toFixed(2)}</span>
                  </h4>
                   <button onClick={handleClick} className="btn btn-dark w-100">Order</button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default InspirationDetails;
