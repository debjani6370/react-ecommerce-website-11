// import React from 'react'

//     import React, { useEffect } from 'react';
//     import { useParams } from 'react-router-dom';
    
//     const UpdateForm = () => {

//       const [formData, setFormData] = React.useState({
//         title: '',
//         author: '',
//       });
//       const { id } = useParams();
    
//       useEffect(() => {
//         getSinglePost();
//       }, []);
    
//       const getSinglePost = async () => {
//         fetch(`http://localhost:3000/items/${id}`)
//           .then((response) => {
//             console.log(response);
//             return response.json();
//           })
//           .then((result) => {
//             console.log(result);
//             setFormData({
//               title: result.title,
//               author: result.author,
//             });
//           });
//       };
    
//       const [msg, setMsg] = React.useState('');
//       const handleForm = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         const reqObj = {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         };
//         fetch(`http://localhost:3000/posts/${id}`, reqObj)
//           .then((res) => res.json())
//           .then((result) => {
//             setMsg('data updated');
//             console.log(result);
//             setFormData({
//               title: '',
//               author: '',
//             });
//           });
//       };
//       const collectInput = (e) => {
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value,
//         });
//       };
//       return (
//         <>
//           <form onSubmit={handleForm}>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={collectInput}
//             />
//             <input
//               type="text"
//               name="author"
//               value={formData.author}
//               onChange={collectInput}
//             />
//             <input type="submit" value="update" />
//           </form>
//           <p>{msg}</p>
//         </>
//       );
    
    
// }

// export default UpdateForm


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    img: '',
    name: '',
    category: '',
    description: '',
  });

  const { id } = useParams();

  useEffect(() => {
    const getSingleItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/items/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setFormData({
          img: result.img,
          name: result.name,
          category: result.category,
          description: result.description,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getSingleItem();
  }, [id]);

  const [msg, setMsg] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
    const reqObj = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    fetch(`http://localhost:3000/items/${id}`, reqObj)
      .then((res) => res.json())
      .then((result) => {
        setMsg('Data updated');
        console.log(result);
        setFormData({
          img: '',
          name: '',
          category: '',
          description: '',
        });
      });
  };

  const collectInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (<>

<div className="navbar">
      <a className="pageback-btn"><Link to="/">Home</Link></a>
      </div>


    <form onSubmit={handleForm} className="form-container">
      <div className="form-content">
        <h2 className="form-title">Update Data Form</h2>

        <label htmlFor="image" className="form-label">Image Upload:</label>
        <input
          type="text"
          id="image"
          name="img"
          className="form-input"
          onChange={collectInput}
          value={formData.img}
          accept="image/*"
          required
        />

        <label htmlFor="title" className="form-label">Title:</label>
        <input
          type="text"
          id="title"
          className="form-input"
          name="name"
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
          name="category"
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
          name="description"
          value={formData.description}
          onChange={collectInput}
          required
        ></textarea>

        <button type="submit" className="form-button">Update</button>
      </div>
      <p>{msg}</p>
    </form>
 </> );
};

export default UpdateForm;
