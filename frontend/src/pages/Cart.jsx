import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import CartTotal from '../components/CartTotat';
import Swal from 'sweetalert2'; // Optional: For user feedback

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleCheckout = () => {
    // Save cart data to localStorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    navigate('/place-order');
  };

  // Determine if the button should be disabled
  const isButtonDisabled = !loggedInUser || cartData.length === 0;

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length === 0 ? (
          <p className="text-gray-500">Your cart is empty. Start adding products!</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id) || {};
            if (!productData.name) return null; // Handle missing product gracefully

            return (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
              >
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) => {
                    const newValue = Number(e.target.value);
                    if (newValue > 0) {
                      updateQuantity(item._id, item.size, newValue);
                    }
                  }}
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type='number'
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => {
                    updateQuantity(item._id, item.size, 0);
                    Swal.fire({ // Show feedback on removal
                      title: "Removed!",
                      text: "Item removed from cart.",
                      icon: "success",
                      button: "OK",
                    });
                  }}
                  className='w-4 mr-4 sm:w-5 cursor-pointer'
                  src={assets.bin_icon}
                  alt='Remove item'
                />
              </div>
            );
          })
        )}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button 
              onClick={!isButtonDisabled ? handleCheckout : null} 
              className={`bg-black text-white text-sm mt-8 px-8 py-3 hover:bg-gray-700 transition-colors duration-500 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
              disabled={isButtonDisabled}
            >
              PROCEED TO CHECKOUT
            </button>
            {isButtonDisabled && (
              <p className="text-red-500 text-xs">
                {!loggedInUser ? 'You must log in to proceed!' : 'Your cart is empty!'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
