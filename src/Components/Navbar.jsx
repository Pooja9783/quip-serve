import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light ">
        <form className="container-fluid justify-content-start">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <p className="m-2 fs-5 link-dark">Home</p>
          </Link>
          <Link to="/edit/:id" style={{ textDecoration: "none" }}>
            <p className="m-2 fs-5 link-dark">Edit</p>
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
