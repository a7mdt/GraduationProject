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
      <h1 className="text-2xl font-bold mb-4">Products List</h1>
      <div className="w-full lg:max-w-7xl mx-auto p-4 bg-white shadow-md rounded-md overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100 text-sm font-semibold hidden md:table-row">
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Sub Category</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr
                key={index}
                className="block md:table-row border-b md:border-none mb-4 md:mb-0"
              >
                {/* Image row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Image:</span>
                  <img
                    className="w-26 h-20 object-cover mx-auto"
                    src={item.image[0]}
                    alt={item.name}
                  />
                </td>

                {/* Name row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Name:</span>
                  <p className="ml-2 text-center">{item.name}</p>
                </td>

                {/* Category row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Category:</span>
                  <p className="ml-2 text-center">{item.category}</p>
                </td>

                {/* Sub Category row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Sub Category:</span>
                  <p className="ml-2 text-center">{item.subCategory}</p>
                </td>

                {/* Price row */}
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Price:</span>
                  <p className="ml-2 text-center">
                    {currency}
                    {item.price}
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

export default List;
