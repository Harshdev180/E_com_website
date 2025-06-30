import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import styled from 'styled-components';

const Cod = () => {

    return (
        <Wrapper>
            <div className="thankyou-container">
                <div className="thankyou-card">
                    <FaCheckCircle className="thankyou-icon" />
                    <h1>Thank You for Your Order!</h1>
                    <p>Your order has been placed successfully and will be delivered soon.</p>
                    <p><strong>Payment Mode:</strong> Cash on Delivery</p>
                    <div className="thankyou-buttons">
                        <button onClick={() => window.location.href = "/"}>Back to Home</button>
                        <button onClick={() => alert("Tracking feature coming soon!")}>Track Order</button>
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
  height: 100vh;
  background-color: #f1f4f9;
  padding: 20px;
}

.thankyou-card {
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 700px;
  width: 100%;
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
}

.thankyou-buttons button {
  margin: 0 10px;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.thankyou-buttons button:hover {
  background-color: #0056b3;
}

`;
export default Cod