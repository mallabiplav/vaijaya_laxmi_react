import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/vijayaLaxmiLogoBlack.png";
import "./navigationBar.css";
import { useMediaQuery } from "react-responsive";

const NavigationBar = () => {
  const [showHamburgerNav, setShowHamburgerNav] = useState(false);
  const [hamburgerNavOpen, sethamburgerNavOpen] = useState(false);
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    setShowHamburgerNav(false);
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  useEffect(() => {
    isTablet && setShowHamburgerNav(true);
  });

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
      // location.pathname !== "/journey"
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
        <Link to="/">
          <img src={logo} className="logo-image" alt="logo" />
        </Link>
        {/* {hamburgerNavOpen && (
          <h5 className="nav-bottom-heading" style={{ color: "#636363" }}>
            Vijaya Laxmi
          </h5>
        )} */}
        <div className="nav-items">
          <ul>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products/rugs"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                Rugs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/journey"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                Journey
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about-us"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
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
