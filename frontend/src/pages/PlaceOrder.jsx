// // import React from 'react'

// // const PlaceOrder = () => {
// //   return (
// //     <div>PlaceOrder</div>
// //   )
// // }

// // export default PlaceOrder

// import React, { useContext } from "react";
// import { ShopContext } from '../context/ShopContext'
// import Title from "../components/Title";


// const CartTotal = () => {

//     const { currency, delivery_fee,getCartAmount} = useContext(ShopContext);

//     return (
//         <div className="w-full">
//             <div className="text-2xl">
//                <Title text1={'CART'} text2={'TOTALS'}/>

//             </div> 
// T
//             <div className="flex flex-col gap-2 mt-2 text-sm">
//                 <div className="flex justify-between">
//                     <p>Subtotal</p>
//                     <p>{currency} {getCartAmount()}.00</p>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between">
//                     <p>Shipping fee</p>
//                     <p>{currency} {delivery_fee}.00</p>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between">
//                     <b>Total</b>
//                     <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CartTotal

// // made by yomna
// // we start this page at (4:04:04) & left (3:58:47)
// // we back at (4:07:59) & left (4:12:27)
// // we back at (4:14:54) & left (4:15:42)
//========================================================================

// import React, { useState, useContext } from 'react';
// // import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// import { assets } from '../assets/assets';
// import { ShopContext } from '../context/ShopContext';
// import CartTotal from '../components/CartTotat';
// import Title from '../components/Title';

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod');
//   const { navigate } = useContext(ShopContext);

//   return (
//     <>
//       <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//         {/* ------------left side ------------ */}
//         <div className='flex flex-col gap-4 w-full sm:max-w-[400px]'>
//           <div className='text-xl sm:text-2xl my-3'>
//             <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//           </div>
//           <div className='flex gap-3'>
//             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
//             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
//           </div>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
//           <div className='flex gap-3'>
//             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
//             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
//           </div>
//           <div className='flex gap-3'>
//             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode' />
//             <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
//           </div>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone' />
//         </div>

//         {/* ------------Right side ------------ */}
//         <div className='mt-8'>
//           <div className='mt-8 min-w-80'>
//             <CartTotal />
//           </div>

//           <div className='mt-12'>
//             <Title text1={'PAYMENT'} text2={'METHOD'} />
           
//             {/* ------------Payment Method Selection ------------ */}
//             <div className='flex gap-3 flex-col lg:flex-row'>
//               <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                 <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//                 <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
//               </div>
//               <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                 <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//                 <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
//               </div>
//               <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                 <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//                 <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//               </div>
//             </div>
//             <div className='w-full text-end mt-8'>
//               <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PlaceOrder;
//=============================================================================================
// import React, { useState, useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// import CartTotal from '../components/CartTotat';
// import { assets } from '../assets/assets';

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod');
//   const { navigate } = useContext(ShopContext);

//   const handlePlaceOrder = () => {
//     // Get cart data from localStorage
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
//     // Get existing orders from localStorage or create an empty array if none exist
//     const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    
//     // Add new order
//     const newOrders = [...existingOrders, ...cart];
//     localStorage.setItem('orders', JSON.stringify(newOrders));
    
//     // Clear the cart
//     localStorage.removeItem('cart');
    
//     // Navigate to the orders page
//     navigate('/orders');
//   };

//   return (
//     <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* Delivery Information */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[400px]'>
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>
//         {/* Delivery form inputs */}
//         <div className='flex gap-3'>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
//         </div>
//         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
//         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
//         <div className='flex gap-3'>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
//         </div>
//         <div className='flex gap-3'>
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode' />
//           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
//         </div>
//         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone' />
//       </div>

//       {/* Payment and Order Placement */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className='flex gap-3 flex-col lg:flex-row'>
//             <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
//             </div>
//             <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
//             </div>
//             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//           </div>
//           <div className='w-full text-end mt-8'>
//             <button onClick={handlePlaceOrder} className='bg-black text-white px-16 py-3 text-sm'>
//               PLACE ORDER
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;




import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotat';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, cartItems } = useContext(ShopContext); // Get cartItems from context

  const handlePlaceOrder = () => {
    // Get existing orders from localStorage or create an empty array if none exist
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

    // Map through cart items to create order details
    const newOrders = Object.keys(cartItems).flatMap(itemId => {
      const itemSizes = cartItems[itemId];
      return Object.keys(itemSizes).map(size => {
        return {
          productId: itemId,
          quantity: itemSizes[size],
          size: size,
          date: new Date().toISOString(), // Store the current date
        };
      });
    });

    // Add new orders to existing orders
    const updatedOrders = [...existingOrders, ...newOrders];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    // Clear the cart
    localStorage.removeItem('cart');

    // Navigate to the orders page
    navigate('/orders');
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Delivery Information */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[400px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        {/* Delivery form inputs */}
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone' />
      </div>

      {/* Payment and Order Placement */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
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
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={handlePlaceOrder} className='bg-black text-white px-16 py-3 text-sm'>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
