import React, { useState } from 'react';
import MegaMenu from './MegaMenu';
import MegaMenu1 from './MegaMenu1';
import MegaMenu2 from './MegaMenu2';
import MegaMenu3 from './MegaMenu3';
import MegaMenu4 from './MegaMenu4';
import MegaMenu5 from './MegaMenu5';

const MenuItem = ({ title }:any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="menu-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#">{title}</a>
      {isHovered && title ==='MEN' && (<MegaMenu1 />) }
      {isHovered && title ==='WOMEN' && (<MegaMenu2 />) }
      {isHovered && title ==='KIDS' && (<MegaMenu3 />) }
      {isHovered && title ==='HOME & LIVING' && (<MegaMenu4 />) }
      {isHovered && title ==='BEAUTY' && (<MegaMenu5 />) }
    </div>
  );
};

export default MenuItem;
