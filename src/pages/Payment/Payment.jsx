import React from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
  const totalPrice = useSelector((state) => state.cart.cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0));

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="bg-light p-4 rounded shadow-sm mb-4">
            <h2>Payment Details</h2>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number:</label>
              <input type="text" id="cardNumber" name="cardNumber" className="form-control" placeholder="(ex: 2212 - 7747 - 3324 - 4456)" />
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <label htmlFor="expDate" className="form-label">Expiration Date:</label>
                <input type="text" id="expDate" name="expDate" className="form-control" placeholder="MM/YY" />
              </div>
              <div className="col-md-6">
                <label htmlFor="cvv" className="form-label">CVV:</label>
                <input type="text" id="cvv" name="cvv" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h2>Summary</h2>
            <div className="d-flex justify-content-between mb-4">
              <span>Total:</span>
              <span>{totalPrice.toFixed(2)} USD</span>
            </div>
            <button className="btn btn-dark w-100">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
