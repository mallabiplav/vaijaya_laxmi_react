import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/vijayaLaxmiLogoBlack.png";
import "./navigationBar.css";
import { useMediaQuery } from "react-responsive";
import sanityClient from "../../client.js";
import DropdownText from "../text-components/dropdown-text-component";

const NavigationBar = () => {
  const [collectionList, setCollectionList] = useState([]);
  const [showHamburgerNav, setShowHamburgerNav] = useState(false);
  const [hamburgerNavOpen, sethamburgerNavOpen] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "rugCollections"]{
            collectionName
        }`
      )
      .then((data) => {
        setCollectionList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    if (!isTablet) {
      setShowHamburgerNav(false);
      window.onscroll = function () {
        scrollFunction();
      };
    } else {
      setShowHamburgerNav(true);
    }
  }, [isTablet]);

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
        <Link to="/">
          <img src={logo} className="logo-image" alt="logo" />
        </Link>

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
            <li className="nav-item" id="nav-rugs">
              <Link
                className="nav-link"
                to="/products/rugs"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                Rugs
              </Link>
              <div
                className={
                  !showHamburgerNav
                    ? "nav-collection-dropdown"
                    : "nav-collection-dropdown-hide"
                }
              >
                <ul className="nav-collection-dropdown-ul">
                  {collectionList.map((collection, i) => {
                    return (
                      <li key={collection.collectionName}>
                        <Link
                          // to={`/products/rugs/${collection.collectionName}`}
                          //ROUTER LINK NOT REFRESHING!! CHANGE CODE
                          onClick={() => {
                            window.location.href = `/products/rugs/${collection.collectionName}`;
                          }}
                          // to={`/products/rugs/${collection.collectionName}`}
                          id={"dropdown" + collection.collectionName}
                        >
                          <DropdownText
                            text={
                              collection.collectionName === "Founders"
                                ? collection.collectionName + " Collection"
                                : collection.collectionName
                            }
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
                to="/communications"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                Communications
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

            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                Blog
              </a>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => {
                  sethamburgerNavOpen(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
