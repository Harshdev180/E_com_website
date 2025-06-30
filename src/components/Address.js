import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios"
import { useRazorpay } from "react-razorpay";
import { useCartContext } from "../Context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";

const Address = (myData) => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { clearCart, total_price } = useCartContext();
  const { isLoading, Razorpay } = useRazorpay();

  const [formError, setFormError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    locality: '',
    payment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentMethod((prev) => ({ ...prev, [name]: value }));
    console.log('submitted', name)
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const { name, email, phone, address, city, pincode, locality } = paymentMethod;

    if (!name || !email || !phone || !address || !city || !pincode || !locality) {
      setFormError("Please fill in all the required fields.");
      return;
    }
    setFormError("");
    clearCart();
    // alert("Order placed successfully with Cash on Delivery.");
    navigate("/cod");
  };



  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      console.log(total_price);
      const response = await axios.post('http://localhost:5005/api/payment/create-orders', {
        amount: total_price / 100 + 500,
        currency: 'INR',
      });

      console.log(response.data.data)
      const { id, amount, currency } = response.data.data;
      console.log("amount", response.data.amount)
      const options = {
        key: "rzp_test_8GmOdgEydSSvr0", // Replace with Razorpay Key ID
        amount,
        currency,

        name: "My Store",
        description: "Test Transaction",
        order_id: id,
        handler: (res) => {
          alert(`Payment Successful! Payment ID: ${res.razorpay_payment_id}`);
          clearCart();
          console.log(res);
        },
        prefill: {
          name: user,
          email: paymentMethod.email,
          contact: paymentMethod.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      console.log(options)

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (err) {
      console.error("Error initiating payment:", err);
    }
  };

  return (
    <Wrapper>
      <h2>Place Your Order</h2>
      <form onSubmit={handlePayment}>
        <div className='grid grid-two-column'>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={paymentMethod.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={paymentMethod.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={paymentMethod.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            City:
            <input
              type="text"
              name="city"
              value={paymentMethod.city}
              onChange={handleChange}
              required
            />
          </label>

          <label className="address">
            Shipping Address:
            <textarea
              name="address"
              value={paymentMethod.address}
              onChange={handleChange}
              required
              rows="6"
            ></textarea>
          </label>

          <label>
            Pincode:
            <input
              type="number"
              name="pincode"
              value={paymentMethod.pincode}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Locality:
            <input
              type="text"
              name="locality"
              value={paymentMethod.locality}
              onChange={handleChange}
              required
            />
          </label>

          <div className="payment-buttons">
            <button type="submit" disabled={isLoading}>Pay Now</button>
            <button type="submit" onSubmit="/cod" onClick={handleButtonClick}>Cash on delivery</button>
          </div>

          {formError && <p style={{ color: 'red' }}>{formError}</p>}
        </div>
      </form>
    </Wrapper >
  );
};

const Wrapper = styled.section`
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .grid{
    gap:50px
  }

  h2 {
    text-align: center;
    margin-bottom: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  label {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #333;
  }

  input, textarea, select {
    padding: 10px;
    font-size: 14px;
    margin-top: 6px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
  }

.address{
    grid-column-end: span 2;
    // border:2px solid red;
    width:500px;
}

.payment-buttons {
        display: contents;
        grid-column: span 2;
        gap: 1rem;
        margin-top: 1rem;
    }

textarea {
    width: 100%;
    min-height: 100px; 
    resize: vertical;
}

  button {
    margin-top:20px;
    padding: 12px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

 .options {
    margin-top:20px;
    // width:100%;
    // border: 2px solid red;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #333;
  }

  .card{
    display:inline-flex;
    flex-direction:column;
    width:100%;
  }
    
  .valid{
    // border:2px solid red;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap:25px;
    font-size: 16px;
    margin-top: 6px;
    padding: 10px;
    background-color:white;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
  }

   .valid label{
    // border:2px solid blue;
    font-size:16px;
    font-weight:500;
    display: flex;
    flex-direction: row;
    color: #333;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
  }

   input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
       -webkit-appearance: none;
        margin: 0;
    }

  input[type="number]{
    -moz-appearance: textfield;
  }

   /* ✅ Responsive Design */
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .address,
    .payment-buttons {
      grid-column: span 1;
    }

    button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    form {
      padding: 0;
    }

    h2 {
      font-size: 1.4rem;
    }

    input,
    textarea {
      font-size: 13px;
      padding: 8px;
    }

    button {
      font-size: 15px;
      padding: 10px;
    }
  }
  
`;

export default Address;