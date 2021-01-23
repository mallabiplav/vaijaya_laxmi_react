import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav class="nav-bar">
      <div class="nav-logo">Vijaya Laxmi</div>
      <div class="nav-items">
        <ul>
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/products/rugs">Rugs</Link>
          </li>
          <li class="nav-item">
            <Link to="/journey">Journey</Link>
          </li>
          <li class="nav-item">
            <a href="#">About-Us</a>
          </li>
          <li class="nav-item">
            <a href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
