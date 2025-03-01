import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import apiClient from "../../api";
import AnotherProduct from "../AnotherPruduct/anotherPruduct";
import Loading from "../Loading/Loading";
import ToastNotification, { showToast } from "../Toast"; 

const CartDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await apiClient.get(`/cartDetails/${id}`);
        setProduct(response);

        const relatedResponse = await apiClient.get("/cartDetails");
        const filteredProducts = relatedResponse
          .filter((item) => item.id !== parseInt(id))
          .slice(0, 4);
        setRelatedProducts(filteredProducts);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    showToast("Səbətə əlavə olundu!", "success"); 
  };

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="container py-5">
      <ToastNotification />
      <div className="row mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-uppercase">{product.name}</h2>
          <div className="mb-3">
            <h3>Məhsul təsviri</h3>
            <p>{product.description}</p>
          </div>
          <div className="mb-3">
            <h3>Ölçü</h3>
            <p>{product.dimension}</p>
          </div>
          <div className="mb-3">
            <h3>Rəng</h3>
            <p>{product.color}</p>
          </div>
          <div className="mb-3">
            <h3>Qiymət</h3>
            <p>{product.price}</p>
          </div>
          <button
            className="btn btn-dark w-100"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="relatedProducts">
        <h3 className="text-center mb-4">Digər Məhsullar</h3>
        <div className="row">
          {relatedProducts.map((item) => (
            <div key={item.id} className="col-md-3 mb-3">
              <AnotherProduct product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;