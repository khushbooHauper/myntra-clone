import React from "react";
import "./styles/megamenu.scss";
import {
  Boys_Clothing,
  Girls_Clothing,
  Infants,
  KBrands,
  KFootwear,
  Kids_Accessories,
  Toys,
} from "./MegaMenuData";
import { Link } from "react-router-dom";
const MegaMenu3 = () => {
  return (
    <div className="mega-menu">
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Boys Clothing</h4>
        {Boys_Clothing.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li>
            <Link to={`/${t.category}/${t.title}`}>{t.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Girls Clothing</h4>
        {Girls_Clothing.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
            <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}

        <h4 className="mega-menu-heading">Plus Size</h4>
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Footwear</h4>
        {KFootwear.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li>
            <Link to={`/${f.category}/${f.title}`}>{f.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Toys</h4>
        {Toys.map((s) => (
          <ul className="mega-menu-links" key={s.title}>
            <li>
            <Link to={`/${s.category}/${s.title}`}>{s.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Infants</h4>
        {Infants.map((s) => (
          <ul className="mega-menu-links" key={s.title}>
            <li>
            <Link to={`/${s.category}/${s.title}`}>{s.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Home & Bath</h4>
        <h4 className="mega-menu-heading">Personal Care</h4>
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Kids Accessories</h4>
        {Kids_Accessories.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
            <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Brands</h4>
        {KBrands.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
            <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu3;
