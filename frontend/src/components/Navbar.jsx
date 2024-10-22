// import React from 'react'
// import { useContext, useState } from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";

// // import { react } from "React"

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);

//   //rwan 2:37:43
//   /*added by afaf  , getCartCount} */
//   const { setShowSearch  , getCartCount } = useContext(ShopContext);
//   //rwan end

//   return (
//     <div className="flex items-center justify-between py-5 font-medium">
//       <Link to="/">
//         <img src={assets.logo} className="w-36" alt="" />
//       </Link>
//       <ul className="hidden sm:flex gap-5 text-5m text-gray-700">
//         <NavLink to="/" className="flex flex-col items-center gap-1">
//           <p>HOME</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to="/collection" className="flex flex-col items-center gap-1">
//           <p>COLLECTION</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to="/about" className="flex flex-col items-center gap-1">
//           <p>ABOUT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to="/contact" className="flex flex-col items-center gap-1">
//           <p>CONTACT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//       </ul>
//       <div className="flex items-center gap-6">
//         {/* updated the onclick by rwan 2:38:04 */}
//         {/* update linke from my self not in the video */}
//         <Link to="/collection">
//         <img
//           onClick={() => setShowSearch(true)}
//           src={assets.search_icon}
//           className="w-5 cursor-pointer"
//           alt=""
//         />
//         </Link>
//         {/* end */}
//         <div className="group relative">
//           {/* add by afaf. added only the link */}
//          <Link to='/Login'>
//           <img
//             className="w-5 cursor-pointer"
//             src={assets.profile_icon}
//             alt=""
//             />
//             </Link>
//             {/*end  */}
//           <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
//             <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//               {/* link added by rwan not in the video */}
//               <Link to='/Orders'><p className="curseo-pointer hover:text-black">Orders</p></Link>
//               {/* link added by rwan not in the video */}
//               <Link to='/Login'><p className="curseo-pointer hover:text-black">Login</p></Link>
//             </div>
//           </div>
//         </div>
//         <Link to="/cart" className="relative">
//           <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
//             {getCartCount()}
//           </p>
//         </Link>
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           alt=""
//           className="w-5 cursor-pointer sm:hidden"
//         />
//       </div>
//       {/* sidebar menu for small screens */}
//       <div
//         className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
//           visible ? "w-full" : "w-0"
//         } `}
//       >
//         <div className="flex flex-col text-gray-600">
//           <div
//             onClick={() => setVisible(false)}
//             className="flex items-center gap-4 p-3 cursor pointer"
//           >
//             <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
//             <p>Back</p>
//           </div>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/"
//           >
//             HOME
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/collection"
//           >
//             COLLECTION
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/about"
//           >
//             ABOUT
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/contact"
//           >
//             CONTACT
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState(""); // State for username
  const [showDropdown, setShowDropdown] = useState(false); // State for profile dropdown visibility
  const [showUserAdminDropdown, setShowUserAdminDropdown] = useState(false); // State for User/Admin dropdown
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.name) {
      setUsername(loggedInUser.name);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser && loggedInUser.name) {
        setUsername(loggedInUser.name);
      } else {
        setUsername("");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.setItem("isLoggedIn", "false");
    setUsername("");
    setShowDropdown(false); // Close the dropdown on logout
  };

  const toggleUserAdminDropdown = () => {
    setShowUserAdminDropdown((prev) => !prev);
  };

  const handleUserAdminSelect = (type) => {
    if (type === "user") {
      navigate("login"); // Redirect to user login page
    } else if (type === "admin") {
      const redirectUrl = "http://localhost:5174/"; //this link 
      window.location.href = redirectUrl; // Redirect to external admin page
    }
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-5m text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <Link to="/collection">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
        </Link>
        {username ? (
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <p
              className="text-black font-semibold cursor-pointer flex items-center"
            >
              Hello, {username}
            </p>
            {showDropdown && (
              <div
                id="dropdown-menu"
                className="absolute right-0 mt-2 w-48 bg-white shadow-md z-10 rounded-lg overflow-hidden"
              >
                <Link to="/Orders">
                  <button className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200">
                    Orders
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div
            className="relative"
            onMouseEnter={() => setShowUserAdminDropdown(true)}
            onMouseLeave={() => setShowUserAdminDropdown(false)}
          >
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
            {showUserAdminDropdown && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white shadow-md z-10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => handleUserAdminSelect("user")}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 "
                >
                  User
                </button>
                <button
                  onClick={() => handleUserAdminSelect("admin")}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                >
                  Admin
                </button>
              </div>
            )}
          </div>
        )}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

