import styled from "styled-components";
import { useState } from "react";


const Address = (myData) => {
    const [upiMethod, setUpiMethod] = useState('');
    const [upiId, setUpiId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        locality: '',
        payment: 'UPI',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentMethod((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Placed:", paymentMethod);
        alert("Order placed successfully!");
    };

    return (
        <Wrapper>
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit} >
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
                        Shipping Address:
                        <textarea
                            name="address"
                            value={paymentMethod.address}
                            onChange={handleChange}
                            required
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

                    {/* Top-level options */}
                    <select value={paymentMethod} onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setUpiMethod(''); // reset UPI method if switching
                    }}>
                        <option value="">-- Select Payment Method --</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="cod">Cash on Delivery</option>
                        <option value="UPI">UPI</option>
                    </select>
                    {paymentMethod === 'UPI' && (
                        <div style={{ marginTop: '1rem' }}>
                            <label>Choose UPI App:</label>
                            <select value={upiMethod} onChange={(e) => setUpiMethod(e.target.value)}>
                                <option value="">-- Select UPI Option --</option>
                                <option value="phonepe">PhonePe</option>
                                <option value="gpay">GPay</option>
                                <option value="paytm">Paytm</option>
                                <option value="amazonpay">Amazon Pay</option>
                                <option value="other">Other UPI</option>
                            </select>
                        </div>
                    )}
                    {upiMethod === 'other' && (
                        <div style={{ marginTop: '1rem' }}>
                            <label>Enter your UPI ID:</label>
                            <input
                                type="text"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                placeholder="example@upi"
                                required
                            />
                        </div>
                    )}
                </div>
                <button type="submit">Place Order</button>
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

  button {
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
`;

export default Address;