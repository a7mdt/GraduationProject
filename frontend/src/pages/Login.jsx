import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert"; // Import SweetAlert

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/"); // Navigate to the homepage if already logged in
    }
  }, [navigate]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (currentState === "Sign Up") {
      // Check if the email is already registered
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        // Show SweetAlert if email already signed up
        Swal({
          title: "Error!",
          text: "This email has already signed up.",
          icon: "error",
          button: "OK",
        });
        return; // Exit the function if the email is already taken
      }
  
      // Store the signup details in local storage
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
  
      // Redirect the user to the login page after successful sign-up
      setCurrentState("Login");
      Swal({
        title: "Success!",
        text: "Account created successfully! Please log in.",
        icon: "success",
        button: "OK",
      });
      navigate("/login"); // Navigate to the login page
    } else if (currentState === "Login") {
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );
  
      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event("storage"));
        
        // Use window.location.href to refresh the homepage
        window.location.href = "/"; // Redirect with a refresh to the homepage
      } else {
        Swal({
          title: "Invalid Credentials!",
          text: "Invalid email or password. Please try again.",
          icon: "error",
          button: "OK",
        });
      }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      noValidate
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
