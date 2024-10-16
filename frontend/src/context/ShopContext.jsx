import { createContext } from "react";
import { products } from "../assets/assets"
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
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

