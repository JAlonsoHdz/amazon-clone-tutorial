import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="../logo.png" alt="logo" />
      </Link>

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionFirstLine">Hello Guest</span>

            <span className="header__optionSecondLine">Sign in</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionFirstLine">Return</span>
          <span className="header__optionSecondLine">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionFirstLine">Your</span>
          <span className="header__optionSecondLine">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__basketOption">
            <ShoppingBasketIcon />
            <span className="header_itemsCheckOut">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
