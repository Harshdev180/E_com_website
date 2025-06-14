import { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router';
import { Button } from "../Styles/Button";
import { useCartContext } from "../Context/cart_context";
import { useAuth0 } from '@auth0/auth0-react';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { loginWithRedirect, isAuthenticated } = useAuth0();


  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };


  // const handleBuyNow = async () => {
  //   // Add product to cart
  //   addToCart(id, color, amount, product);

  //   if (isAuthenticated) {
  //     navigate("/Cart"); // or your target route
  //   } else {
  //     await loginWithRedirect(); // redirects to Auth0 login
  //   }
  // };



  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className='checkStyle' /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button className="btn">Add to Cart</Button>
      </NavLink>

      {isAuthenticated ? (
        <NavLink to="/cart">
          <Button className="btn" onClick={() => addToCart(id, color, amount, product)}>Buy Now</Button>
        </NavLink>
      ) : (
        <NavLink >
          <Button
            className="btn"
            onClick={() => loginWithRedirect({})}>Buy Now</Button>
        </NavLink>
      )}

    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .btn{
    margin: 10px;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

`;

export default AddToCart