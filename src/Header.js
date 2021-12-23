import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src="" alt="" />
      </Link>

      <input type="text" className="header_searchInput" />
      <SearchIcon className="header_searchIcon" />

      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign IN</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Order</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">6</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
