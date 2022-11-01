import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <ul className="navbar">
          <li className="navbar-link">
            <Link to="/">Главная</Link>
          </li>
          <li className="navbar-link name-title">
            Главные новости
          </li>
          <li className="navbar-link">
            <Link  to="news">Новости</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;