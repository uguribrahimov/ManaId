import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { removeFromCart, updateQuantity } from "../../Store/cartSlice"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity })); 
    }
  };

  const handleCheckout = () => {
    navigate('/payment'); 
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="bg-light p-4 rounded shadow-sm">
            <h2 className="mb-4">Səbət</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="row align-items-center mb-4 p-3 border rounded">
                  <div className="col-12 col-md-2 mb-3 mb-md-0">
                    <img src={item.image} alt={item.name} className="img-fluid rounded" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                  </div>
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <h4 className="mb-1">{item.name}</h4>
                    <p className="mb-1 text-muted">Color: {item.color}</p>
                  </div>
                  <div className="col-12 col-md-3 mb-3 mb-md-0">
                    <div className="d-flex align-items-center">
                      <button className="btn btn-outline-secondary me-2" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                      <input type="number" value={item.quantity} readOnly className="form-control text-center me-2" style={{ width: '60px' }} />
                      <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 mb-3 mb-md-0">
                    <p className="mb-0">{(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)} USD</p>
                  </div>
                  <div className="col-12 col-md-1">
                    <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger w-100">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Sizin səbətiniz boşdur.</p>
            )}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h2 className="mb-4">Xülasə</h2>
            <div className="d-flex justify-content-between mb-4">
              <span>Ümumi:</span>
              <span>{totalPrice.toFixed(2)} USD</span>
            </div>
            <button className="btn btn-dark w-100" onClick={handleCheckout}>Ödəniş et</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
