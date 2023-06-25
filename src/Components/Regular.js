import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Regular = () => {
  const [orders,setorder]=useState([])
  useEffect(()=>{
    fetch('Regular.json')
    .then(res => res.json())
    .then(data => setorder(data))
  },[])
  return (
    <div>
      <div className="flex justify-center items-center gap-10 mt=10">
        <div>
          <Link to="/">
            <button class="inline-flex items-center h-10 px-5 py-5 -mb-px text-center text-gray-700 bg-blue-950 border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>

              <span class="mx-1 text-sm sm:text-base">All Order</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/regular">
            <button class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-green-600 border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>

              <span class="mx-1 text-sm sm:text-base">Regular Delivery</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/express">
            <button class="inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-yellow-700 border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>

              <span class="mx-1 text-sm sm:text-base">Express Delivery</span>
            </button>
          </Link>
        </div>
      </div>
      <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl font-black">Name</th>
              <th className="text-2xl font-black">Product</th>
              <th className="text-2xl font-black">Payment Status</th>
              <th className="text-2xl font-black">Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((d, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={d.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{d.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="text-lg text-start font-bold">{d.product}</h1>
                </td>
                <td className="text-center font-bold text-md">{d.payment}</td>
                <td className="text-center font-bold text-md">{d.Delivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Regular;
