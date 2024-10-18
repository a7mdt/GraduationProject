// import { createContext, useState } from "react";
// import { products } from "../assets/assets"
// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = "$";
//   const delivery_fee = 10;

//   //rwan 2:30:45
//   const [search,setSearch] = useState('');
//   const [showSearch,setShowSearch]=useState(false);
//   //rwan end

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search, //rwan 2:32:00
//     setSearch, //rwan 2:32:00
//     showSearch, //rwan 2:32:00
//     setShowSearch //rwan 2:32:00
//   }
//   return (
//     <ShopContext.Provider value={value}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  //rwan 2:30:45
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  //rwan end

  //afaf
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  //not working for some reson 
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    //

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  // const getCartCount = () => {
  //   let totalCount = 0;
  //   for (const items in cartItems) {
  //     for (const item in cartItems[items]) {
  //       try {
  //         if (cartItems[items][item] > 0) {
  //           totalCount += cartItems[item][item];
  //         }
  //       } catch (error) {}
  //     }
  //   }
  //   return totalCount;
  // };

  //from chat
    const getCartCount = () => {
    // Optimized cart count calculation
    return Object.values(cartItems).reduce((count, itemSizes) => {
      return count + Object.values(itemSizes).reduce((sum, quantity) => sum + quantity, 0);
    }, 0);
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };
  //end
  const value = {
    products,
    currency,
    delivery_fee,
    search, //rwan 2:32:00
    setSearch, //rwan 2:32:00
    showSearch, //rwan 2:32:00
    setShowSearch, //rwan 2:32:00
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

// ==================================

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

// import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//   const currency = '$';
//   const delivery_fee = 10;
//   const [search, setSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setCartItems] = useState({});
//   const navigate = useNavigate();

//   const addToCart = async (itemId, size) => {

//     if (!size) {
//       toast.error('Select Product Size');
//       return;
//     }

//     let cartData = structuredClone(cartItems);

//     if (cartData[itemId]) {
//       if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1;
//       }
//       else {
//         cartData[itemId][size] = 1;
//       }
//     }
//     else {
//       cartData[itemId] = {};
//       cartData[itemId][size] = 1;
//     }
//     setCartItems(cartData);

//   }

//   const getCartCount = () => {
//     let totalCount = 0;
//     for (const items in cartItems) {
//       for (const item in cartItems[items]) {
//         try {
//           if (cartItems[items][item] > 0) {
//             totalCount += cartItems[items][item];
//           }
//         } catch (error) {

//         }
//       }
//     }
//     return totalCount;
//   }

//   const updateQuantity = async (itemId, size, quantity) => {

//     let cartData = structuredClone(cartItems);

//     cartData[itemId][size] = quantity;

//     setCartItems(cartData);
//   }

//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for (const items in cartItems) {
//       let itemInfo = products.find((product) => product._id === items);
//       for (const item in cartItems[items]) {
//         try {
//           if (cartItems[items][item] > 0) {
//             totalAmount += itemInfo.price * cartItems[items][item];
//           }
//         } catch (error) {

//         }
//       }
//     }
//     return totalAmount;
//   }

//   const value = {
//     products, currency, delivery_fee,
//     search, setSearch, showSearch, setShowSearch,
//     cartItems, addToCart,
//     getCartCount, updateQuantity,
//     getCartAmount, navigate
//   }

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children}
//     </ShopContext.Provider>
//   )

// }

// export default ShopContextProvider;
// // made by yomna
// // we start this page at (1:05:00) & left at (1:09:23)
// // we back at (2:30:40) & left at (2:32:17)
// // we back at (3:26:23) & left at (3:31:33)
// // we back at (3:35:50) & left at (30:40:31)
// // we back at (3:56:45) & left at (3:38:46)
// // we back at (4:04:22) & left at (4:07:56)
// // we back at (4:13:27) & left at (4:14:54)
// // we back at (4:16:42)




// import { createContext, useState } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = "$";
//   const delivery_fee = 10;
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setCartItems] = useState({});
//   const navigate = useNavigate();

//   const addToCart = async (itemId, size) => {
//     if (!size) {
//       toast.error("Select Product Size");
//       return;
//     }

//     // Use JSON method to deep clone (for compatibility with older browsers)
//     let cartData = JSON.parse(JSON.stringify(cartItems));

//     if (cartData[itemId]) {
//       if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1;
//       } else {
//         cartData[itemId][size] = 1;
//       }
//     } else {
//       cartData[itemId] = {};
//       cartData[itemId][size] = 1;
//     }
//     setCartItems(cartData);
//   };

//   const getCartCount = () => {
//     // Optimized cart count calculation
//     return Object.values(cartItems).reduce((count, itemSizes) => {
//       return count + Object.values(itemSizes).reduce((sum, quantity) => sum + quantity, 0);
//     }, 0);
//   };

//   const updateQuantity = async (itemId, size, quantity) => {
//     if (quantity < 0) return; // Prevent negative quantities

//     let cartData = JSON.parse(JSON.stringify(cartItems));
//     cartData[itemId][size] = quantity;
//     setCartItems(cartData);
//   };

//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for (const itemId in cartItems) {
//       let itemInfo = products.find((product) => product._id === itemId);

//       if (!itemInfo) continue; // Skip if product not found

//       for (const size in cartItems[itemId]) {
//         try {
//           if (cartItems[itemId][size] > 0) {
//             totalAmount += itemInfo.price * cartItems[itemId][size];
//           }
//         } catch (error) {
//           console.error("Error calculating cart amount", error);
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     addToCart,
//     getCartCount,
//     updateQuantity,
//     getCartAmount,
//     navigate,
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children || null} {/* Safeguard for missing children */}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
