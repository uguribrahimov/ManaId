import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, Button } from "antd";
import { useDispatch } from "react-redux"; 
import { addToCart } from "../../Store"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "../../../src/data"; 

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
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="text-uppercase">{product.name}</h2>
          <div className="mb-3">
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>
          <div className="mb-3">
            <h3>Dimension</h3>
            <p>{product.dimension}</p>
          </div>
          <div className="mb-3">
            <h3>Color</h3>
            <p>{product.color}</p>
          </div>
          <div className="mb-3">
            <h3>Retail</h3>
            <p>{product.price}</p>
          </div>
          <button className="btn btn-dark w-100" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      </div>

      <div className="relatedProducts">
        <h3 className="text-center mb-4">Another Product</h3>
        <div className="row">
          {relatedProducts.map((item) => (
            <div key={item.id} className="col-md-3 mb-3">
              <Card cover={<img alt={item.name} src={item.image} />} className="text-center border-0 shadow-sm">
                <div className="p-3">
                  <h4 className="mb-1">{item.name}</h4>
                  <p className="text-danger mb-3">{item.price}</p>
                  <p className="text-muted mb-2">{item.category}</p>
                  <Button type="link" className="p-0">
                    <Link to={`/cartDetails/${item.id}`}>See Details</Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
