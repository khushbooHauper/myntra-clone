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
const MegaMenu1 = () => {
  return (
    <div className="mega-menu">
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Topwear</h4>
        {Topwear.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li >
              <a href="/{t.tile}">{t.title}</a>
            </li>
          </ul>
        ))}

        <h4 className="mega-menu-heading">Indian & Festive Wear</h4>
        {indian_festive.map((i) => (
          <ul className="mega-menu-links" key={i.title}>
            <li >
              <a href="#">{i.title}</a>
            </li>
          </ul>
        ))}
      </div>

      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Bottomwear</h4>
        {bottomwear.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li >
              <a href="#">{b.title}</a>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Innerwear & Sleepwear</h4>
        {Innerwear_Sleepwear.map((n) => (
          <ul className="mega-menu-links" key={n.title}>
            <li >
              <a href="#">{n.title}</a>
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
              <a href="#">{f.title}</a>
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
              <a href="#">{s.title}</a>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Gadgets</h4>
        {Gadgets.map((g) => (
          <ul className="mega-menu-links" key={g.title}>
            <li >
              <a href="#">{g.title}</a>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Fashion Accessories</h4>
        {Fashion_Accessories.map((ba) => (
          <ul className="mega-menu-links" key={ba.title}>
            <li >
              <a href="#">{ba.title}</a>
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
