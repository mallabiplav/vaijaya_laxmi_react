import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/vijayaLaxmiLogoBlack.png";
import ".././css/navigationBar.css";

const NavigationBar = () => {
  const [showHamburgerNav, setShowHamburgerNav] = useState(false);
  const [hamburgerNavOpen, sethamburgerNavOpen] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setTimeout(3000);
      setShowHamburgerNav(true);
    } else {
      setShowHamburgerNav(false);
      sethamburgerNavOpen(false);
    }
  };

  return (
    <>
      {showHamburgerNav && (
        <div
          className={
            hamburgerNavOpen
              ? "hamburger-menu hamburger-menu-active"
              : "hamburger-menu"
          }
          onClick={() => {
            sethamburgerNavOpen(!hamburgerNavOpen);
            // setShowHamburgerNav(!showHamburgerNav);
          }}
        >
          <span className="hamburger-menu-button"></span>
        </div>
      )}
      <nav
        className={
          hamburgerNavOpen ? "nav-bar landing-navbar-active" : "nav-bar"
        }
      >
        {/* <div className="hamburger-menu">XXX</div> */}
        <img src={logo} className="logo-image" alt="logo" />
        {/* {hamburgerNavOpen && (
          <h5 className="nav-bottom-heading" style={{ color: "#636363" }}>
            Vijaya Laxmi
          </h5>
        )} */}
        <div className="nav-items">
          <ul>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products/rugs">
                Rugs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/journey">
                Journey
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

// const navBar = document.querySelector(".nav-bar");
// console.log("NAVBAR", navBar);

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     navBar.style.top = "20px";
//     setTimeout(3000);
//     navBar.classList.add("landing-navbar-active");
//   } else {
//     navBar.classList.remove("landing-navbar-active");
//     document.querySelector(".nav-bar").style.top = "0";
//   }
// }

export default NavigationBar;
