import React from "react";
import "./styles/megamenu.scss";
import { Bath, BedLinenFurnishing, Flooring, HBrands, HomeDécor, KitchenTable, LampsLighting, storage } from "./MegaMenuData";
import { Link } from "react-router-dom";

const MegaMenu4 = () => {
  return (
    <div className="mega-menu">
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Bed Linen & Furnishing</h4>
        {BedLinenFurnishing.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li>
            <Link to={`/${t.category}/${t.title}`}>{t.title}</Link>
            </li>
          </ul>
        ))}
          <h4 className="mega-menu-heading">Flooring</h4>
        {Flooring.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li>
            <Link to={`/${t.category}/${t.title}`}>{t.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Bath</h4>
        {Bath.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
            <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}

        <h4 className="mega-menu-heading">Lamps & Lighting</h4>
        {LampsLighting.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
            <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Home Décor</h4>
        {HomeDécor.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li>
            <Link to={`/${f.category}/${f.title}`}>{f.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Cushions & Cushion Covers</h4>
        <h4 className="mega-menu-heading">Curtains</h4>
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Home Gift Sets</h4>
        <h4 className="mega-menu-heading">Kitchen & Table</h4>
        {KitchenTable.map((s) => (
          <ul className="mega-menu-links" key={s.title}>
            <li>
            <Link to={`/${s.category}/${s.title}`}>{s.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Storage</h4>
        {storage.map((st) => (
          <ul className="mega-menu-links" key={st.title}>
            <li>
            <Link to={`/${st.category}/${st.title}`}>{st.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        
        <h4 className="mega-menu-heading">Brands</h4>
        {HBrands.map((b) => (
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

export default MegaMenu4;
