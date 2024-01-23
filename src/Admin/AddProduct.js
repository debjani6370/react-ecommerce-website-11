import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {




  const [formData, setForm] = React.useState({
   "name": "",
    "img": null,
    "category": "",
    "description": ""
  });


  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);

    const reqObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    fetch('http://localhost:3000/items', reqObj)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setForm({
     "name": "",
    "img": null,
    "category": "",
    "description": ""
        });
      });
  };
  const collectInput = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
return (<>

<div className="navbar">
      <a className="pageback-btn"><Link to="/">Home</Link></a>
      </div>
  

  <form onSubmit={handleForm}>
    <div className="form-container">
      <div className="form-content">
        <h2 className="form-title">Add Data Form</h2>

        <label htmlFor="image" className="form-label">Image Upload:</label>
        <input
          type="text"
          id="image"
          name="img"
          className="form-input"
          onChange={collectInput}
          accept="image/*"
          required
        />

        <label htmlFor="title" className="form-label">Title:</label>
        <input
          type="text"
          id="title"
          className="form-input"
          name='name'
          value={formData.name}
          onChange={collectInput}
          placeholder="Enter title"
          required
        />

        <label htmlFor="categories" className="form-label">Categories:</label>
        <input
          type="text"
          id="categories"
          className="form-input"
          name='category'
          value={formData.category}
          onChange={collectInput}
          placeholder="Enter categories"
          required
        />

        <label htmlFor="description" className="form-label">Description:</label>
        <textarea
          id="description"
          className="form-input"
          placeholder="Enter description"
          rows="4"
          name='description'
          value={formData.description}
          onChange={collectInput}
          required
        ></textarea>

        <button type="submit" className="form-button">Submit</button>

      
      </div>
    </div>
  </form>
  </>);

}

export default AddProduct;

