import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  const signOut = () => {
    if (user) {
      auth
        .signOut()
        .then(function() {
          //when attempting to sign out stay in home page
          history.push("/");
        })
        .catch(function(error) {});
    } else {
      //when attempting to sign in go to login page
      history.push("/login");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="../logo.png" alt="logo" />
      </Link>

      <div className="header__search">
        <input className="header_searchInput" type="text" placeholder="esta madre no sirve aun, no hay search!"/>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option" onClick={signOut}>
            <span className="header__optionFirstLine">
              Hello {user ? user.email : "Guest"}
            </span>

            <span className="header__optionSecondLine">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionFirstLine">Return</span>
            <span className="header__optionSecondLine">& Orders</span>
          </div>
        </Link>


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
