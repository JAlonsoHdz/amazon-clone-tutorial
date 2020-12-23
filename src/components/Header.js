import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="../logo.png" alt="logo" />
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionFirstLine">Hello Guest</span>
          <span className="header__optionSecondLine">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionFirstLine">Return</span>
          <span className="header__optionSecondLine">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionFirstLine">Your</span>
          <span className="header__optionSecondLine">Prime</span>
        </div>

        <div className="header__basketOption">
          <ShoppingBasketIcon />
          <span className="header_itemsCheckOut">1</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
