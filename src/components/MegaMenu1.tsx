import React from "react";
import "./styles/megamenu.scss";
import {
  Fashion_Accessories,
  Footwear,
  Gadgets,
  Innerwear_Sleepwear,
  Sports_Active_Wear,
  Topwear,
  bottomwear,
  indian_festive,
} from "./MegaMenuData";
import { Link } from "react-router-dom";
const MegaMenu1 = () => {
  return (
    <div className="mega-menu">
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Topwear</h4>
        {Topwear.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li >
            <Link to={`/${t.category}/${t.title}`}>{t.title}</Link>
            </li>
          </ul>
        ))}

        <h4 className="mega-menu-heading">Indian & Festive Wear</h4>
        {indian_festive.map((i) => (
          <ul className="mega-menu-links" key={i.title}>
            <li >
            <Link to={`/${i.category}/${i.title}`}>{i.title}</Link>
            </li>
          </ul>
        ))}
      </div>

      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Bottomwear</h4>
        {bottomwear.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li >
            <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Innerwear & Sleepwear</h4>
        {Innerwear_Sleepwear.map((n) => (
          <ul className="mega-menu-links" key={n.title}>
            <li >
            <Link to={`/${n.category}/${n.title}`}>{n.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Plus Size</h4>
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Footwear</h4>
        {Footwear.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li >
            <Link to={`/${f.category}/${f.title}`}>{f.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Personal Care & Grooming</h4>
        <h4 className="mega-menu-heading">Sunglasses & Frames</h4>
        <h4 className="mega-menu-heading">Watches</h4>
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Sports & Active Wear</h4>
        {Sports_Active_Wear.map((s) => (
          <ul className="mega-menu-links"  key={s.title}>
            <li>
            <Link to={`/${s.category}/${s.title}`}>{s.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Gadgets</h4>
        {Gadgets.map((g) => (
          <ul className="mega-menu-links" key={g.title}>
            <li >
            <Link to={`/${g.category}/${g.title}`}>{g.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Fashion Accessories</h4>
        {Fashion_Accessories.map((ba) => (
          <ul className="mega-menu-links" key={ba.title}>
            <li >
            <Link to={`/${ba.category}/${ba.title}`}>{ba.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Bags & Backpacks</h4>

        <h4 className="mega-menu-heading">Luggages & Trolleys</h4>
      </div>
    </div>
  );
};

export default MegaMenu1;
