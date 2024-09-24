import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex-col items-center justify-center h-screen">
      <div className="bg-gray-800 text-white w-full max-w-3xl z-10 py-4 px-8">
        <div id="navbar" className="flex justify-center space-x-8">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="reservepage/" className="hover:text-gray-300">
            Reserve
          </Link>
          <Link to="contactpage/" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default Navigation;
