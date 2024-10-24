import { createContext, useState } from "react";
import { products, artists } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [allArtists, setAllArtists] = useState(artists);

  // Search state
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]); // New state to store orders
  const navigate = useNavigate();

  // Add item to cart
  const addToCart = (itemId, size) => {
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

  // Get total count of items in cart
  const getCartCount = () => {
    return Object.values(cartItems).reduce((count, itemSizes) => {
      return (
        count +
        Object.values(itemSizes).reduce((sum, quantity) => sum + quantity, 0)
      );
    }, 0);
  };

  // Update item quantity in cart
  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (quantity <= 0) {
      delete cartData[itemId][size]; // Remove item if quantity is 0
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId]; // Remove the item entry if no sizes left
      }
    } else {
      cartData[itemId][size] = quantity; // Update quantity
    }

    setCartItems(cartData);
  };

  // Get total amount in cart
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalAmount += itemInfo.price * cartItems[items][item];
        }
      }
    }
    return totalAmount;
  };

  // Place an order
  const placeOrder = (orderDetails) => {
    setOrders((prevOrders) => [...prevOrders, orderDetails]);
    // Optionally clear cart items after placing an order
    setCartItems({});
    toast.success("Order placed successfully!");
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    placeOrder, // Provide placeOrder function
    orders, // Provide orders state
    navigate,
    artists: allArtists,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
