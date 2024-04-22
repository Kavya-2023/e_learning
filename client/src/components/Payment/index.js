import React, { useState } from 'react';
import Qrcode from '../../assets/Qrcode.png';
import './index.css';
import Navbar from '../Navbar11';
const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setPaymentMethod(selectedMethod);
    setShowQRCode(selectedMethod === 'upi');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
  };

  return (
   <>
    <Navbar/>
    <div className='container'>
      
      <div className='form-container'>
      <h2 className="header" style={{color:"white"}}>NANOQUEST</h2>
      <div className="payment-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" value={cardName} onChange={(e) => setCardName(e.target.value)} required />
          </div>
          <div className="form-field">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select id="paymentMethod" name="paymentMethod" onChange={handlePaymentMethodChange} value={paymentMethod}>
              <option value="upi">UPI</option>
            </select>
          </div>
          <div className="form-field">
            <button type="submit" className='pay-button'>Pay Now</button>
          </div>
        </form>
          <div className="form-field">
            <img src={Qrcode} alt="QR Code" className='qr-logo' />
          </div>
      </div>
    </div>
  
    </div>
   </>
    );
};

export default PaymentForm;
