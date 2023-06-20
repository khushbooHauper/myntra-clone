import React from 'react';
import './styles/megamenu.scss'
import { Beauty_Personal_Care, Gadgets, Indian_FusionWear, Jewellery, Lingerie_Sleepwear, Sports_ActiveWear, WFootwear, Western_Wear } from './MegaMenuData';
import { Link } from 'react-router-dom';
const MegaMenu2 = () => {
  return (
    <div className="mega-menu">
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Indian & Fusion Wear</h4>
        {Indian_FusionWear.map((t)=>(
            <ul className="mega-menu-links" key={t.title}>
          <li><Link to={`/${t.category}/${t.title}`}>{t.title}</Link></li>
          
        </ul>
))}
         <h4 className="mega-menu-heading">Belts, Scarves & More</h4>
         
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Western Wear</h4>
        {Western_Wear.map((bw)=>(
             <ul className="mega-menu-links" key={bw.title}>
             <li><Link to={`/${bw.category}/${bw.title}`}>{bw.title}</Link></li>
             
           </ul>
         ))}
        
          <h4 className="mega-menu-heading">Plus Size</h4>
      </div>
      <div className="mega-menu-column">
      <h4 className="mega-menu-heading">Maternity</h4>
      <h4 className="mega-menu-heading">Sunglasses & Frames</h4>
      <h4 className="mega-menu-heading">Footwear</h4>
        {WFootwear.map((f)=>(
             <ul className="mega-menu-links" key={f.title}>
             <li><Link to={`/${f.category}/${f.title}`}>{f.title}</Link></li>
             
           </ul>
         ))}
         <h4 className="mega-menu-heading">Sports & Active Wear</h4>
         {Sports_ActiveWear.map((s)=>(
             <ul className="mega-menu-links" key={s.title}>
             <li><Link to={`/${s.category}/${s.title}`}>{s.title}</Link></li>
             
           </ul>
         ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Lingerie & Sleepwear</h4>
        {Lingerie_Sleepwear.map((sl)=>(
             <ul className="mega-menu-links" key={sl.title}>
             <li><Link to={`/${sl.category}/${sl.title}`}>{sl.title}</Link></li>
             
           </ul>
         ))}
         <h4 className="mega-menu-heading">Beauty & Personal Care</h4>
        {Beauty_Personal_Care.map((g)=>(
             <ul className="mega-menu-links" key={g.title}>
             <li><Link to={`/${g.category}/${g.title}`}>{g.title}</Link></li>
             
           </ul>
         ))}
         
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">Gadgets</h4>
        {Gadgets.map((b)=>(
             <ul className="mega-menu-links" key={b.title}>
             <li><Link to={`/${b.category}/${b.title}`}>{b.title}</Link></li>
             
           </ul>
         ))}
         <h4 className="mega-menu-heading">Jewellery</h4>
         {Jewellery.map((j)=>(
             <ul className="mega-menu-links" key={j.title}>
             <li><Link to={`/${j.category}/${j.title}`}>{j.title}</Link></li>
             
           </ul>
         ))}
          <h4 className="mega-menu-heading">Backpacks</h4>
          <h4 className="mega-menu-heading">Handbags, Bags & Wallets</h4>
          <h4 className="mega-menu-heading">Luggages & Trolleys</h4>
      </div>
    </div>
  );
};

export default MegaMenu2;
