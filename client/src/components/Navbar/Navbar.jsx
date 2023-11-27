import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import search from "../../assets/search-icon.svg";

import Avatar from "../Avatar/Avatar";
import "./Navbar.css";

const Navbar = () => {
  var user = null;
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to={"/"} className="nav-item nav-logo">
          <img src={logo} alt="logo" width="150px" height="30px" />
        </Link>

        <Link to={"/"} className="nav-item nav-btn">
          About
        </Link>

        <Link to={"/"} className="nav-item nav-btn">
          Products
        </Link>

        <Link to={"/"} className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="15" className="search-icon" />
        </form>

        {user === null ? (
          <Link to={"/Auth"} className="nav-links nav-item">
            Log In
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              cursor="pointer"
              color="white"
              // fontSize="25px"
            >
              <Link
                to={"/User"}
                style={{ color: "white", textDecoration: "none" }}
              >
                P
              </Link>
            </Avatar>

            <button className="nav-links nav-item">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
