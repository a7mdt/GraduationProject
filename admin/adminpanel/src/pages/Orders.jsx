import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ordersData } from "../assets/orders";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newOrders = orders.filter((_, i) => i !== index);
        setOrders(newOrders);
        Swal.fire("Deleted!", `Order has been deleted.`, "success");
      }
    });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Orders Hisory</h1>
      <div className="w-full lg:max-w-7xl mx-auto p-4 bg-white shadow-md rounded-md overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100 text-sm font-semibold hidden md:table-row">
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Purchased Artworks</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, index) => (
              <tr
                key={index}
                className="block md:table-row border-b md:border-none mb-4 md:mb-0"
              >
                {/* Image row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Username:</span>
                  <p className="ml-2 text-center">{item.Username}</p>
                </td>

                {/* Name row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Artworks:</span>
                  <p className="ml-2 text-center">{item.products.join(", ")}</p>
                </td>

                {/* Category row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Date:</span>
                  <p className="ml-2 text-center">{item.date}</p>
                </td>

                {/* Sub Category row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Status:</span>
                  <p
                    className={`${
                      item.status === "pending"
                        ? "text-yellow-500"
                        : "text-green-500"
                    } ml-2 text-center`}
                  >
                    {item.status}
                  </p>
                </td>

                {/* Action row */}
                <td className="border px-4 py-2 text-center flex items-center justify-end md:table-cell">
                  <button
                    className="text-red-600 font-semibold ml-2 hover:text-red-700 transition-colors duration-500"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
