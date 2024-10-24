import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotat from '../components/CartTotat';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, cartItems, updateQuantity } = useContext(ShopContext); // Get cartItems and updateQuantity from context

  // State for delivery information inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const handlePlaceOrder = () => {
    // Get existing orders from localStorage or create an empty array if none exist
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // Map through cart items to create order details
    const newOrders = Object.keys(cartItems).flatMap(itemId => {
      const itemSizes = cartItems[itemId];
      return Object.keys(itemSizes).map(size => {
        return {
          productId: itemId,
          quantity: itemSizes[size],
          size: size,
          date: new Date().toISOString(), // Store the current date
          userId: loggedInUser.email, // Store user identifier
        };
      });
    });

    // Add new orders to existing orders
    const updatedOrders = [...existingOrders, ...newOrders];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    // Remove products from the cart
    Object.keys(cartItems).forEach(itemId => {
      const itemSizes = cartItems[itemId];
      Object.keys(itemSizes).forEach(size => {
        updateQuantity(itemId, size, 0); // Set quantity to 0 for each item
      });
    });

    // Clear the cart from localStorage
    localStorage.removeItem('cart');

    // Navigate to the orders page
    navigate('/orders');
  };

  // Check if all required fields are filled
  const isFormValid = firstName && lastName && email && street && city && state && zipcode && country && phone;

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Delivery Information */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[400px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        {/* Delivery form inputs */}
        <div className='flex gap-3'>
          <input 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type='text' 
            placeholder='First Name' 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
          <input 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type='text' 
            placeholder='Last Name' 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>
        <input 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type='email' 
          placeholder='Email Address' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type='text' 
          placeholder='Street' 
          value={street} 
          onChange={(e) => setStreet(e.target.value)} 
        />
        <div className='flex gap-3'>
          <input 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type='text' 
            placeholder='City' 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
          />
          <input 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type='text' 
            placeholder='State' 
            value={state} 
            onChange={(e) => setState(e.target.value)} 
          />
        </div>
        <div className='flex gap-3'>
          <input 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type='number' 
            placeholder='Zipcode' 
            value={zipcode} 
            onChange={(e) => setZipcode(e.target.value)} 
          />
          <input 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type='text' 
            placeholder='Country' 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
          />
        </div>
        <input 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type='text' 
          placeholder='Phone' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
      </div>

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotat />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-6 mx-4' src={assets.paybal} alt="paybal" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button 
              onClick={handlePlaceOrder} 
              className={`bg-black text-white px-16 py-3 text-sm hover:bg-gray-700 transition-colors duration-500 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`} 
              disabled={!isFormValid}
            >
              PLACE ORDER
            </button>
            {!isFormValid && <p className="text-red-500 text-xs mt-2">Please fill in all fields to proceed!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
