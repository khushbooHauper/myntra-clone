import React, { useState, useEffect } from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtenzl6ZLakToprQqBwfb-NDKIcIgPLSc-ra33q_lq03bXlIlA31AdWKiRxvsMuZqnBxsb8CJUS98&usqp=CAU&ec=48600113"
            alt="Myntra Logo"
            className="logo"
          />
        </Link>
      </div>
      {isMobile ? (
        <div className="navbar-toggle" onClick={toggleMenu}>
          {/* <input
            type="checkbox"
            id="navbar-toggle-input"
            checked={isMenuOpen}
            onChange={toggleMenu}
          /> */}
          <label htmlFor="navbar-toggle-input" className="navbar-toggle-label">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <MenuItem className="nav-link" title="MEN" />
              </li>
              <li className="nav-item">
                <MenuItem className="nav-link" title="WOMEN" />
              </li>
              <li className="nav-item">
                <MenuItem className="nav-link" title="KIDS" />
              </li>
              <li className="nav-item">
                <MenuItem className="nav-link" title="HOME & LIVING" />
              </li>
              <li className="nav-item">
                <MenuItem className="nav-link" title="BEAUTY" />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <MenuItem className="nav-link" title="MEN" />
            </li>
            <li className="nav-item">
              <MenuItem className="nav-link" title="WOMEN" />
            </li>
            <li className="nav-item">
              <MenuItem className="nav-link" title="KIDS" />
            </li>
            <li className="nav-item">
              <MenuItem className="nav-link" title="HOME & LIVING" />
            </li>
            <li className="nav-item">
              <MenuItem className="nav-link" title="BEAUTY" />
            </li>
          </ul>
        </div>
      )}
      {!isMobile && (<>
        <div className="search-input-div">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="navbar-icons">
        <div className="icon-and-heading">
          <a href="#" className="nav-icon">
            <i className="fa fa-user"></i>
          </a>
          <span>Profile</span>
        </div>
        <div className="icon-and-heading">
          <a href="#" className="nav-icon">
            <i className="fa fa-heart"></i>
          </a>
          <span>Wishlist</span>
        </div>
        <div className="icon-and-heading">
          <a href="#" className="nav-icon">
            <i className="fa fa-shopping-bag"></i>
          </a>
          <span>Bag</span>
        </div>
      </div>
      </>)}
      
    </nav>
  );
};

export default Header;
