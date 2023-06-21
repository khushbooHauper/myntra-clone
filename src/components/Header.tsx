import React, { useState, useEffect } from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import side from '../images/side.jpg'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setIsSubMenuOpen3] = useState(false);
  const [isSubMenuOpen4, setIsSubMenuOpen4] = useState(false);
  const [isSubMenuOpen5, setIsSubMenuOpen5] = useState(false);

  const toggleSubMenu1 = () => {
    setIsSubMenuOpen1(!isSubMenuOpen1);
  };
  const toggleSubMenu2 = () => {
    setIsSubMenuOpen2(!isSubMenuOpen2);
  };
  const toggleSubMenu3 = () => {
    setIsSubMenuOpen3(!isSubMenuOpen3);
  };
  const toggleSubMenu4 = () => {
    setIsSubMenuOpen4(!isSubMenuOpen4);
  };
  const toggleSubMenu5 = () => {
    setIsSubMenuOpen5(!isSubMenuOpen5);
  };
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
          <div className='burger-icon-brand-text-container'>
          <label htmlFor="navbar-toggle-input" className="navbar-toggle-label">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className='brand-text-mobile'>
          <span>Myntra</span>
          </div>
          </div>
          
          
          <div className="navbar-icons">
         <div className="icon-and-heading">
           <a href="#" className="nav-icon">
             <i className="fa fa-search" style={{color:'black'}}></i>
           </a>
           
         </div>
         <div className="icon-and-heading">
           <a href="#" className="nav-icon">
             <i className="fa fa-heart" style={{color:'black'}}></i>
           </a>
           
         </div>
         <div className="icon-and-heading">
           <a href="#" className="nav-icon">
             <i className="fa fa-shopping-bag" style={{color:'black'}}></i>
           </a>
           
         </div>
       </div>
        
       <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
  <div className="sidebar">
    <div className='side-image-box'>
    <img src={side} className='sidenav-image'/>
    </div>
  
    <ul className="sidebar-nav">
      
      <li className="sidebar-item">
        <MenuItem className="sidebar-link" title="MEN" />
        <div className="menu-item-icon" onClick={toggleSubMenu1}>
              <i className={`fa ${isSubMenuOpen1 ? 'fa-angle-down' : 'fa-angle-right'}`} style={{color:'grey',marginLeft:'233px'}}/>
            </div>
         
          {isSubMenuOpen1 && (
            
            <ul className="submenu">
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Clothing" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Shoes" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Accessories" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Gadgets" />
              </li>
              
            </ul>
          )}
      </li>
      <li className="sidebar-item">
        <MenuItem className="sidebar-link" title="WOMEN" />
        <div className="menu-item-icon" onClick={toggleSubMenu2}>
              <i className={`fa ${isSubMenuOpen2 ? 'fa-angle-down' : 'fa-angle-right'}`} style={{color:'grey',marginLeft:'233px'}}/>
            </div>
         
          {isSubMenuOpen2 && (
            
            <ul className="submenu">
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Clothing" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Shoes" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Accessories" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Gadgets" />
              </li>
              
            </ul>
          )}
        
      </li>
      <li className="sidebar-item">
        <MenuItem className="sidebar-link" title="KIDS" />
        <div className="menu-item-icon" onClick={toggleSubMenu3}>
              <i className={`fa ${isSubMenuOpen3 ? 'fa-angle-down' : 'fa-angle-right'}`} style={{color:'grey',marginLeft:'233px'}}/>
            </div>
         
          {isSubMenuOpen3 && (
            
            <ul className="submenu">
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Clothing" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Shoes" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Accessories" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Gadgets" />
              </li>
              
            </ul>
          )}
      </li>
      <li className="sidebar-item">
        <MenuItem className="sidebar-link" title="HOME & LIVING" />
        <div className="menu-item-icon" onClick={toggleSubMenu4}>
              <i className={`fa ${isSubMenuOpen4 ? 'fa-angle-down' : 'fa-angle-right'}`} style={{color:'grey',marginLeft:'233px'}}/>
            </div>
         
          {isSubMenuOpen4 && (
            
            <ul className="submenu">
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Clothing" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Shoes" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Accessories" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Gadgets" />
              </li>
              
            </ul>
          )}
      </li>
      <li className="sidebar-item">
        <MenuItem className="sidebar-link" title="BEAUTY" />
        <div className="menu-item-icon" onClick={toggleSubMenu5}>
              <i className={`fa ${isSubMenuOpen5 ? 'fa-angle-down' : 'fa-angle-right'}`} style={{color:'grey',marginLeft:'233px'}}/>
            </div>
         
          {isSubMenuOpen5 && (
            
            <ul className="submenu">
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Clothing" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Shoes" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Accessories" />
              </li>
              <li className="submenu-item">
                <MenuItem className="submenu-link" title="Gadgets" />
              </li>
              
            </ul>
          )}
      </li>
    </ul>
  </div>
</div>

        </div>
      ) : (
        <>
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
         <div className="search-input-div">
         <input type="text" placeholder="Search for products, brands and more" />
       </div>
       <div className="navbar-icons">
         <div className="icon-and-heading">
           <a href="#" className="nav-icon">
             <i className="fa fa-user" style={{color:'black'}}></i>
           </a>
           <span>Profile</span>
         </div>
         <div className="icon-and-heading">
           <a href="#" className="nav-icon">
             <i className="fa fa-heart" style={{color:'black'}}></i>
           </a>
           <span>Wishlist</span>
         </div>
         <div className="icon-and-heading">
           <a href="#" className="nav-icon">
             <i className="fa fa-shopping-bag" style={{color:'black'}}></i>
           </a>
           <span>Bag</span>
         </div>
       </div>
       </>
      )}
      
      
    </nav>
  );
};

export default Header;
