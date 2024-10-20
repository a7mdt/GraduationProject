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
      <p className="mb-2">Orders Hisory</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Username</b>
          <b>Purchased Artworks</b>
          <b>Date</b>
          <b>Status</b>
          <b className="text-center">Action</b>
        </div>

        {orders.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 text-sm"
            key={index}
          >
            <p>{item.Username}</p>
            <p>{item.products.join(", ")}</p>
            <p>{item.date}</p>
            <p
              className={`${
                item.status === "pending" ? "text-yellow-500" : "text-green-500"
              }`}
            >
              {item.status}
            </p>
            <p
              className="text-right md:text-center cursor-pointer text-lg text-red-600"
              onClick={() => handleDelete(index)}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
