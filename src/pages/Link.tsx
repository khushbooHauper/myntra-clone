import React, { useState } from "react";
import "../components/styles/link.scss";
import Home from "./Home";
import { useParams } from "react-router-dom";
import { Topwear } from "../components/MegaMenuData";
import ProductCard from "../components/ProductCard";
import allProducts from '../components/fakeData/allProducts.json'


const LinkPage = () => {
 const {category,title} = useParams();
 const filteredData = allProducts.filter((item) => item.category === category);
 const [sortBy, setSortBy] = useState("");
 const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

 const sortData = (data:any, sortOption:any) => {
  if (sortOption === "highToLow") {
    return [...data].sort((a, b) => b.price - a.price);
  } else if (sortOption === "lowToHigh") {
    return [...data].sort((a, b) => a.price - b.price);
  } else if (sortOption === "popularity") {
    return [...data].sort((a, b) => b.popularity - a.popularity);
  } else {
    return data;
  }
};

  const sortedData = sortData(filteredData, sortBy);

  const handleSortChange = (event:any) => {
    event.preventDefault();
    const selectedOption = event.target.dataset.sort || '';
    setSortBy(selectedOption);
    
  };

  const handleBrandFilter =(brand: string): void => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filteredByBrand = sortedData.filter((product:any) => {
    if (selectedBrands.length === 0) {
      return true; // Show all products if no brand is selected
    }
    return selectedBrands.includes(product.brand);
  });
  return (
    <div className="Link-page-container">
      <div className="breadcrumbs">
        <p>Home / {category} / <b>{title}</b></p>
        <p><b>{title}</b> - {filteredData.length} items</p>
        <div className="filter-dropdown">
          <span className="h5-heading-black">FILTERS</span>
          <div className="dropdown">
            <button className="dropdown-toggle">Sort by</button>
            <ul className="dropdown-menu">
              <li>
                <a href="#" data-sort="popularity" onClick={handleSortChange}>
                  Popularity
                </a>
              </li>
              <li>
                <a href="#" data-sort="lowToHigh" onClick={handleSortChange}>
                  <b>Price:</b>Low to High
                </a>
              </li>
              <li>
                <a href="#" data-sort="highToLow" onClick={handleSortChange}>
                  <b>Price:</b>High to Low
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="filter-category-cards-container">
        <div className="filters-column">
          {/* <div className="category-div">
            <h5>CATEGORIES</h5>
            <div>
              <input type="checkbox" />
              <label>Kurta Sets(34,444)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Kurtas(60,124)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Dhotis Sets(4,673)</label>
            </div>
          </div> */}
          <div className="category-div">
            <div className="brand-search-div">
              <h5>BRAND</h5>
              <span className="search-brand">
                <i className="fa  fa-search"></i>
              </span>
            </div>
            {sortedData.map((s:any)=>(
              <div key={s.id}>
              <input type="checkbox" checked={selectedBrands.includes(s.brand)}
                  onChange={() => handleBrandFilter(s.brand)}/>
              <label>{s.brand}</label>
            </div>
            ))}
            {/* <div>
              <input type="checkbox" />
              <label>SOJANYA(4460)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>DEYANN(4105)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>KISAH(3234)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Jompers(2262)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>VASTRAMAY(1555)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Anouk(1336)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Sanwara(1234)</label>
            </div> */}
            {/* <div>
              <input type="checkbox" />
              <label>See Designs(1229)</label>
            </div> */}
            <div className="pink-text">+ 225 more</div>
          </div>
          <div className="category-div">
            <h5>PRICE</h5>
            <div>
              <input type="checkbox" />
              <label>Rs. 219 to Rs. 9165(43209)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Rs. 9165 to Rs. 18111(202)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Rs. 18111 to Rs. 27057(14)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Rs. 27057 to Rs. 36003(4)</label>
            </div>
          </div>
          <div className="category-div">
            <div className="brand-search-div">
              <h5>COLOR</h5>
              <span className="search-brand">
                <i className="fa  fa-search"></i>
              </span>
            </div>
            <div>
              <input type="checkbox" />
              <label>Blue (4708)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Green (4105)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Black (3208)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>White (3062)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Maroon (2786)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Yellow (2518)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Sanwara(1234)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Navy Blue (2392)</label>
            </div>
            <div className="pink-text">+ 37 more</div>
          </div>
          <div className="category-div-discount">
            <h5>DISCOUNT RANGE</h5>
            <div>
              <input type="checkbox" />
              <label>10% and above</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>20% and above</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>30% and above</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>40% and above</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>50% and above</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>60% and above</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>70% and above</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>80% and above</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>90% and above</label>
            </div>
          </div>
        </div>
        <div className="cards-column">
         {filteredByBrand?.map((a:any)=>(
          <ProductCard product={a} key={a.id}/>
         ))}
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
