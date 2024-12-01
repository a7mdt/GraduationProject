import React, { useState, useEffect } from "react";

const Users = () => {

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="w-full lg:max-w-7xl mx-auto p-4 bg-white shadow-md rounded-md overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100 text-sm font-semibold hidden md:table-row">
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Number of Orders</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            
              <tr
                className="block md:table-row border-b md:border-none mb-4 md:mb-0"
              >
                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Username:</span>
                  <p className="ml-2 text-center">Ahmed</p>
                </td>

                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Email:</span>
                  <p className="ml-2 text-center">ahmed@gmail.com</p>
                </td>

                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">Phone Number:</span>
                  <p className="ml-2 text-center">01019240091</p>
                </td>

                <td className="border px-4 py-2 flex items-center md:table-cell">
                  <span className="md:hidden font-semibold">No. Orders:</span>
                  <p className="ml-2 text-center">20</p>
                </td>

                <td className="border px-4 py-2 text-center flex items-center justify-end md:table-cell">
                  <button
                    className="text-green-600 font-semibold ml-2 hover:text-green-700 transition-colors duration-500"
                  >
                    Chat With
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
