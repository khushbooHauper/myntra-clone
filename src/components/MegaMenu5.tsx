import React from "react";
import "./styles/megamenu.scss";
import { BTopBrands, BeautyGiftMakeupSet, Fragrances, HairStraightener, Haircare, Makeup, MenGrooming, SkincareBathBody } from "./MegaMenuData";

const MegaMenu5 = () => {
  return (
    <div className="mega-menu">
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Makeup</h4>
        {Makeup.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li>
              <a href="#">{t.title}</a>
            </li>
          </ul>
        ))}
          
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Skincare, Bath & Body</h4>
        {SkincareBathBody.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
              <a href="#">{b.title}</a>
            </li>
          </ul>
        ))}

        <h4 className="mega-menu-heading">Baby Care</h4>
        <h4 className="mega-menu-heading">Masks</h4>
        
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Haircare</h4>
        {Haircare.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li>
              <a href="#">{f.title}</a>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Fragrances</h4>
        {Fragrances.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li>
              <a href="#">{f.title}</a>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Appliances</h4>
        {HairStraightener.map((s) => (
          <ul className="mega-menu-links" key={s.title}>
            <li>
              <a href="#">{s.title}</a>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Men's Grooming</h4>
        {MenGrooming.map((s) => (
          <ul className="mega-menu-links" key={s.title}>
            <li>
              <a href="#">{s.title}</a>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Beauty Gift & Makeup Set</h4>
        {BeautyGiftMakeupSet.map((st) => (
          <ul className="mega-menu-links" key={st.title}>
            <li>
              <a href="#">{st.title}</a>
            </li>
          </ul>
        ))}
         <h4 className="mega-menu-heading">Premium Beauty</h4>
         <h4 className="mega-menu-heading">Wellness & Hygiene</h4>
      </div>
      <div className="mega-menu-column">
        
        <h4 className="mega-menu-heading">Top Brands</h4>
        {BTopBrands.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
              <a href="#">{b.title}</a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu5;
