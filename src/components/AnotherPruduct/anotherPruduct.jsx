import React from "react";
import { Link } from "react-router-dom";
import "./AnotherProduct.css"; 

const RelatedProductCard = ({ product }) => {
  return (
    <div className="related-card">
      <img src={product.image} alt={product.name} />
      <div className="card-content">
        <h4 className="card-header">{product.name}</h4>
        <p className="card-price">{product.price}</p>
        <p className="card-category">{product.category}</p>
        <Link to={`/cartDetails/${product.id}`} className="details-button">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default RelatedProductCard;