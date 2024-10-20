// import { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';


// const Orders = () => {

//   const { products, currency} = useContext(ShopContext);





//   return (
//     <div className='border-t pt-16'>

//       <div className='text-2xl'>
//         <Title text1={'My'} text2={'ORDERS'}/>
//       </div>

//       <div>
//         {
//           products.slice(1,4).map((item,index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex-col md:flex-row md:item-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img className='w-16 sm:w-20' src={item.image[0]} alt=""/>
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name}</p>
//                   <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                     <p className='text-lg'> {currency}{item.price}</p>
//                     <p>Quantity: 1</p>
//                     <p>Size: M</p>
//                   </div>
//                   <p className='mt-2'>Data<span className='text-gray-400'>25, Jui, 2024</span></p>
//                 </div>
//               </div>
//               <div className='md:w-1/2 flex justify-between'>
//                 <div className='flex items-center gap-2'>
//                   <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                   <p className='text-sm md:text-base'> Ready to ship</p>
//                 </div>
//                 <button className='border px-4 py-2 text-sm font-medium rounded-sm'></button>
//               </div>
//             </div>
//           ))
//         }
//       </div>

//     </div>
//   )
// }

// export default Orders



// import { useEffect, useState, useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';

// const Orders = () => {
//   const { currency } = useContext(ShopContext);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Retrieve orders from localStorage
//     const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
//     setOrders(storedOrders);
//   }, []);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'My'} text2={'ORDERS'} />
//       </div>

//       <div>
//         {orders.length === 0 ? (
//           <p>No orders placed yet.</p>
//         ) : (
//           orders.map((item, index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex-col md:flex-row md:item-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img className='w-16 sm:w-20' src={item.image} alt="" />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name}</p>
//                   <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                     <p className='text-lg'>{currency}{item.price}</p>
//                     <p>Quantity: {item.quantity}</p>
//                     <p>Size: {item.size}</p>
//                   </div>
//                   <p className='mt-2'>Date: <span className='text-gray-400'>25, Jui, 2024</span></p>
//                 </div>
//               </div>
//               <div className='md:w-1/2 flex justify-between'>
//                 <div className='flex items-center gap-2'>
//                   <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                   <p className='text-sm md:text-base'> Ready to ship</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Orders;


// import { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';

// const Orders = () => {
//   const { products, currency, orders } = useContext(ShopContext); // Assuming orders is part of your context

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'My'} text2={'ORDERS'} />
//       </div>
//       <div>
//         {
//           // Display orders if available
//           orders.length > 0 ? (
//             orders.map((order, index) => {
//               const productData = products.find(item => item._id === order.productId); // Assuming order contains productId

//               return (
//                 <div key={index} className='py-4 border-t border-b text-gray-700 flex-col md:flex-row md:item-center md:justify-between gap-4'>
//                   <div className='flex items-start gap-6 text-sm'>
//                     <img className='w-16 sm:w-20' src={productData?.image[0]} alt="" />
//                     <div>
//                       <p className='sm:text-base font-medium'>{productData?.name}</p>
//                       <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                         <p className='text-lg'> {currency}{productData?.price}</p>
//                         <p>Quantity: {order.quantity}</p> {/* Assuming quantity is part of the order */}
//                         <p>Size: {order.size}</p> {/* Assuming size is part of the order */}
//                       </div>
//                       <p className='mt-2'>Date: <span className='text-gray-400'>{order.date}</span></p> {/* Adjust date format as needed */}
//                     </div>
//                   </div>
//                   <div className='md:w-1/2 flex justify-between'>
//                     <div className='flex items-center gap-2'>
//                       <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                       <p className='text-sm md:text-base'> Ready to ship</p>
//                     </div>
//                     <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Details</button>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <p>No orders found.</p>
//           )
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders;






import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  
  // Get existing orders from localStorage
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'My'} text2={'ORDERS'} />
      </div>
      <div>
        {orders.length > 0 ? (
          orders.map((order, index) => {
            const productData = products.find(item => item._id === order.productId);
            
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex-col md:flex-row md:item-center md:justify-between gap-4'>
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={productData?.image[0]} alt="" />
                  <div>
                    <p className='sm:text-base font-medium'>{productData?.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                      <p className='text-lg'>{currency}{productData?.price}</p>
                      <p>Quantity: {order.quantity}</p>
                      <p>Size: {order.size}</p>
                    </div>
                    <p className='mt-2'>Date: <span className='text-gray-400'>{order.date}</span></p>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base'>Ready to ship</p>
                  </div>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Details</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
