import { createContext, useState } from "react";
import { products } from "../assets/assets"
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  //rwan 2:30:45
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch]=useState(false);
  //rwan end

  const value = {
    products,
    currency,
    delivery_fee,
    search, //rwan 2:32:00
    setSearch, //rwan 2:32:00
    showSearch, //rwan 2:32:00
    setShowSearch //rwan 2:32:00
  }
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


// import { createContext } from "react";
// import { products } from "../assets/assets";
// import PropTypes from 'prop-types'; // Import PropTypes

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const currency = "$";
//   const delivery_fee = 10;

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// // PropTypes validation
// ShopContextProvider.propTypes = {
//   children: PropTypes.node.isRequired, // children must be a valid React node and required
// };

// export default ShopContextProvider;

