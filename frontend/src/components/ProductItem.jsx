import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";


const ProductItem = ({id,image,name,price}) => {

    const {currency}=useContext(ShopContext);
     
    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
              <img src={image[0]} className="hover:scale-110 transition ease-in-out" alt="" />  
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    )
}

export default ProductItem

// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

// const ProductItem = ({ id, image, name, price }) => {
//     const { currency } = useContext(ShopContext);

//     return (
//         <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
//             <div className="overflow-hidden">
//                 <img src={image[0]} className="hover:scale-110 transition ease-in-out" alt={name} />  
//             </div>
//             <p className="pt-3 pb-1 text-sm">{name}</p>
//             <p className="text-sm font-medium">{currency}{price}</p>
//         </Link>
//     );
// };

// ProductItem.propTypes = {
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id can be string or number and is required
//     image: PropTypes.arrayOf(PropTypes.string).isRequired,                   // image should be an array of strings (required)
//     name: PropTypes.string.isRequired,                                       // name should be a string and is required
//     price: PropTypes.number.isRequired,                                      // price should be a number and is required
// };

// export default ProductItem;
