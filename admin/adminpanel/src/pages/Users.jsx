import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { usersData } from "../assets/users";

const Users = () => {
  const [userss, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const handleDelete = (index) => {
    const userName = userss[index].name;

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
        const newUsers = userss.filter((_, i) => i !== index);
        setUsers(newUsers);
        Swal.fire("Deleted!", `${userName} User has been deleted.`, "success");
      }
    });
  };

  return (
    <>
      <p className="mb-2">All Users</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_2fr_2fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Username</b>
          <b>Email</b>
          <b>Phone Number</b>
          <b>Number of Orders</b>
          <b className="text-center">Action</b>
        </div>

        {
          userss.map((item, index) => (
            <div
              className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_2fr_2fr_1fr_1fr] items-center gap-2 py-1 px-2 text-sm"
              key={index}
            >
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.number_of_orders}</p>
              <p
                className="text-right md:text-center cursor-pointer text-lg text-red-600"
                onClick={() => handleDelete(index)}
              >
                X
              </p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Users;
