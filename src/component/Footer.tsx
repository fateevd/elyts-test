import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Link className="footer-link" to="/">Главная</Link>
          <Link className="footer-link" to="news">Новости</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;