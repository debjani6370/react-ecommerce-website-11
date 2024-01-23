
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const NavBar = ({ categories, onFilterChange }) => {
  return (
    <div className="navbar">
      <a className="pageback-btn"><Link to="/">Home</Link></a>
      <select className='cat' onChange={(e) => onFilterChange(e.target.value)}>
        <option value="All">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

const Products = () => {
  const [productdata, setPosts] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        setFilteredData(result);
      });
  }, []);

  const categories = Array.from(
    new Set(productdata ? productdata.map((data) => data.category) : [])
  );

  const handleFilterChange = (category) => {
    if (category === 'All') {
      setFilteredData(productdata);
    } else {
      const filteredList = productdata.filter((data) => data.category === category);
      setFilteredData(filteredList);
    }
  };

  if (productdata === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavBar categories={categories} onFilterChange={handleFilterChange} />

      {filteredData.map((data) => (
        <div className="prdcard-container" key={data.id}>
          <div className="prdcard">
            <img src={data.img} alt="kkk" className="prdcard-image" />
            <div className="prdcard-content">
              <h3 className="prdcard-title">{data.name}</h3>
              <p className="prdcard-description">{data.description}</p>
              <button className="buy-now-button">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
