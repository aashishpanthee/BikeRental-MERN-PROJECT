import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  decreaseCart,
  removeFromCart,
  addToCart,
  clearCart,
  getTotals,
} from "../redux/features/Cart/cartSlice";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  //   const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className='cart-container'>
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className='cart-empty'>
            <p>Your cart is currently empty</p>
            <div className='start-shopping'>
              <Link to='/'>
                <ArrowLeftIcon size={20} />
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className='titles'>
              <h3 className='product-title'>Bike</h3>
              <h3 className='price'>Price per day</h3>
              <h3 className='ml-10'>Days</h3>
              <h3 className='total'>Total</h3>
              <h3 className='total'>Checkout</h3>
            </div>
            <div className='cart-items'>
              {cart.cartItems?.map((cartItem) => (
                <div className='cart-item' key={cartItem.id}>
                  <div className='cart-product'>
                    <img src={cartItem.image} alt={cartItem.bikeName} />
                    <div className='flex flex-col justify-center space-y-2'>
                      <h3 className='text-center'>{cartItem.bikeName}</h3>

                      <button
                        onClick={() => handleRemoveFromCart(cartItem)}
                        className='px-4 py-1 border-2 border-gray-400 rounded-sm'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className='cart-product-price'>
                    Rs {cartItem.pricePerDay}
                  </div>
                  <div className='cart-product-quantity'>
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className='count'>{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className='cart-product-total-price'>
                    Rs {cartItem.pricePerDay * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className='cart-summary'>
              <button
                className='px-4 py-2 border-2 border-gray-400 rounded-sm'
                onClick={clearCartHandler}
              >
                Clear Cart
              </button>
              <div className='cart-checkout'>
                <div className='subtotal'>
                  <span>Subtotal</span>
                  <span className='amount'>${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                {/* {auth._id ? (
                <PayButton cartItems={cart.cartItems} />
              ) : (
                <button
                  className='cart-login'
                  onClick={() => navigate("/login")}
                >
                  Login to Checkout
                </button>
              )} */}
                <div className='start-shopping'>
                  <Link to='/'>
                    <ArrowLeftIcon size={20} />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
