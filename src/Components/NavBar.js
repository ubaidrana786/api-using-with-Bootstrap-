import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "black" }}
      >
        <Link className="navbar-brand" to="/">
          <img src="Img/logo.png" alt="fsd" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto m-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                <b>Home</b> <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                <b>About Us</b>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                <b>Contact Us</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-danger ml-5"  onClick={props.login}>
         {props.status ? "LogOut" : "LogIn"}
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
