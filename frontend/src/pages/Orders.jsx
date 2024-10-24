import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import Swal from 'sweetalert2';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  const handleDeleteOrder = (orderToDelete) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedOrders = orders.filter(order => order !== orderToDelete);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        Swal.fire(
          'Deleted!',
          'Your order has been deleted.',
          'success'
        );
        window.location.reload(); // Reload the page to reflect the changes
      }
    });
  };

  const handleUpdateOrder = (orderToUpdate, newQuantity) => {
    const updatedOrders = orders.map(order => {
      if (order === orderToUpdate) {
        return { ...order, quantity: newQuantity }; // Update the quantity
      }
      return order;
    });
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    window.location.reload(); // Reload the page to reflect the changes
  };

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'My'} text2={'ORDERS'} />
      </div>
      <div>
        {orders.filter(order => order.userId === loggedInUser.email).map((order, index) => {
          const productData = products.find(item => item._id === order.productId);
          
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex-col md:flex-row md:item-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={productData?.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{productData?.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{productData?.price}</p>
                    <p>Quantity: 
                      <input 
                        type="text" 
                        disabled
                        defaultValue={order.quantity} 
                        onBlur={(e) => handleUpdateOrder(order, e.target.value)} 
                        className='border border-gray-300 rounded w-16 text-center ml-3'
                      />
                    </p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>{order.date}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button 
                  className='border px-4 py-2 text-sm rounded-lg text-red-600 bg-white font-semibold ml-2 hover:bg-red-700 hover:text-white transition-all duration-500' 
                  onClick={() => handleDeleteOrder(order)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        {orders.length === 0 && <p>No orders found.</p>}
      </div>
    </div>
  );
};

export default Orders;
