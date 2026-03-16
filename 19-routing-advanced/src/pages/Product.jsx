import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="p-5 flex gap-5 ">
        <Link
          className="p-2 bg-blue-700 rounded text-lg font-medium "
          to="/product/men"
        >
          Men
        </Link>
        <Link
          className="p-2 bg-blue-700 rounded text-lg font-medium "
          to="/product/women"
        >
          Women
        </Link>

        <Link
          className="p-2 bg-blue-700 rounded text-lg font-medium "
          to="/product/kids"
        >
          Kids
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
