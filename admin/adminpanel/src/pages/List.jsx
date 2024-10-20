import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { currency } from "../App";
import { products } from "../assets/productsData";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(products);
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
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 text-sm"
            key={index}
          >
            <img className="w-12" src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
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

export default List;
