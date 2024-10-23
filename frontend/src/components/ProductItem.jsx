// import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer mx-2 " to={`/product/${id}`}> 
      <div className="flex flex-col items-center p-4">
        <img
          src={image[0]}
          className="w-full h-[300px] object-cover max-w-[200px] shadow-lg hover:shadow-xl hover:scale-110 transition ease-in-out duration-300"
          alt=""
        />
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
      </div>
    </Link>
  );
};

export default ProductItem;
