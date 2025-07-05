import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const PayConfirm = () => {

  const navigate = useNavigate();
  const changeTrack = () => {
    navigate("/trackOrder");
  }
  return (
    <Wrapper>
      <div className="thankyou-container">
        <div className="thankyou-card">
          <FaCheckCircle className="thankyou-icon" />
          <h1>Thank You for Your Order!</h1>
          <p>Your order has been placed successfully and will be delivered soon.</p>
          <p><strong>Payment Mode:</strong> Online Payment</p>
          <div className="thankyou-buttons">
            <button onClick={() => window.location.href = "/"}>Back to Home</button>
            <button onClick={changeTrack}>Track Order</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.thankyou-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: #f1f4f9;
  padding: 20px;
  box-sizing: border-box;
}

.thankyou-card {
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
}

.thankyou-icon {
  font-size: 60px;
  color: #28a745;
  margin-bottom: 20px;
}

.thankyou-card h1 {
  font-size: 26px;
  color: #333;
  margin-bottom: 10px;
}

.thankyou-card p {
  font-size: 16px;
  color: #555;
  margin: 8px 0;
}

.thankyou-buttons {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.thankyou-buttons button {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 120px;
}

.thankyou-buttons button:hover {
  background-color: #0056b3;
}

/* ============ RESPONSIVE MEDIA QUERIES ============ */

@media screen and (max-width: 768px) {

.thankyou-container{
   min-height: 50vh;
}

  .thankyou-card {
    padding: 30px 20px;
  }

  .thankyou-card h1 {
    font-size: 22px;
  }

  .thankyou-card p {
    font-size: 15px;
  }

  .thankyou-icon {
    font-size: 48px;
  }
}

@media screen and (max-width: 480px) {

.thankyou-container{
   min-height: 50vh;
}
  .thankyou-card {
    padding: 20px 16px;
  }

  .thankyou-card h1 {
    font-size: 20px;
  }

  .thankyou-card p {
    font-size: 14px;
  }

  .thankyou-icon {
    font-size: 40px;
  }

  .thankyou-buttons button {
    font-size: 14px;
    padding: 10px 18px;
  }
}


`;
export default PayConfirm