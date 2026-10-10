import React from 'react'
import {  useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';
function OrderPlaced() {
  const navigate =  useNavigate();
  const location = useLocation();
  const handleNavigate = (e) =>{
    e.preventDefault();
    navigate("/products")
  };
  
  if(!location.state?.orderPlaced) {
    return "PLEASE ADD PRODUCTS TO CART!!!!!!!"
  }

  return (
    <div className='order-placed'>
        <div className="tick-icon">
           ✓   
      </div>
      <h1>Order Placed Successfully!</h1>

      <p>Thank you for shopping with us.</p>
      <p>Your order has been placed and will be processed soon or later.</p>
      <button onClick={handleNavigate}>Continue Shopping</button>
      
    </div>
  )
}

export default OrderPlaced
