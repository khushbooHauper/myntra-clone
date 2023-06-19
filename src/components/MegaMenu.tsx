import React from 'react';
import './styles/megamenu.scss'
const MegaMenu = () => {
  return (
    <div className="mega-menu">
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Category 1</h4>
        <ul className="mega-menu-links">
          <li><a href="#">Subcategory 1.1</a></li>
          <li><a href="#">Subcategory 1.2</a></li>
          <li><a href="#">Subcategory 1.3</a></li>
        </ul>
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Category 2</h4>
        <ul className="mega-menu-links">
          <li><a href="#">Subcategory 2.1</a></li>
          <li><a href="#">Subcategory 2.2</a></li>
          <li><a href="#">Subcategory 2.3</a></li>
        </ul>
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Category 3</h4>
        <ul className="mega-menu-links">
          <li><a href="#">Subcategory 3.1</a></li>
          <li><a href="#">Subcategory 3.2</a></li>
          <li><a href="#">Subcategory 3.3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
