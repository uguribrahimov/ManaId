import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, Button } from "antd";
import { useDispatch } from "react-redux"; 
import { addToCart } from "../../Store"; 
import styles from "./CartDetails.module.css";
import data from "../../../public/data"; // Doğru yolu kontrol edin

const CartDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const selectedProduct = data.cartDetails.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);

    const filteredProducts = data.cartDetails.filter((item) => item.id !== parseInt(id)).slice(0, 4);
    setRelatedProducts(filteredProducts);
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.cartDetails}>
      <div className={styles.topSection}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h2 className={styles.productName}>{product.name.toUpperCase()}</h2>
          <div className={styles.productInfoSection}>
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>
          <div className={styles.productInfoSection}>
            <h3>Dimension</h3>
            <p>{product.dimension}</p>
          </div>
          <div className={styles.productInfoSection}>
            <h3>Color</h3>
            <p>{product.color}</p>
          </div>
          <div className={styles.productInfoSection}>
            <h3>Retail</h3>
            <p>{product.price}</p>
          </div>
          <button className={styles.addToCartButton} onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className={styles.relatedProducts}>
        <h3>Another Product</h3>
        <div className={styles.productGrid}>
          {relatedProducts.map((item) => (
            <Card key={item.id} cover={<img alt={item.name} src={item.image} />} className={styles.relatedCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardName}>{item.name}</span>
                  <span className={styles.cardPrice}>{item.price}</span>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.cardCategory}>{item.category}</span>
                  <Button type="link" className={styles.detailsButton}>
                    <Link to={`/cartDetails/${item.id}`}>See Details</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
