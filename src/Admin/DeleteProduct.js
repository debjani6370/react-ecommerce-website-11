import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeleteProduct = () => {
  //useState() for set the data

  const [postsData, setPosts] = React.useState(null);

  // create fetch() to fetch the data .....inside useEffect()........ every fetch() return a promise to avoid we use .then()

  useEffect(() => {
   get()
  }, []);

  const get=()=>{
    fetch('http://localhost:3000/items')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log(result);
      setPosts(result);
    });
  }

    const deleteform = (e) => {
      if (window.confirm('Are you sure want to delete?')) {
        fetch(`http://localhost:3000/items/${e.target.name}`, {
          method: 'DELETE',
        })
          .then((res) => res.json)
          .then((result) => {
            get();
          });
      }
    };

  if (postsData == null) {
    return <p> loading....</p>;
  }

  return (
    <>
    <div className="navbar">
      <a className="pageback-btn"><Link to="/">Home</Link></a>
      </div>
      <div >
        <table className='table-admin' border='2' >
          <div>
            <tr>


              <th className='img'>Product</th>
              <th className='title-tb' >Title</th>
              <th>DELETE</th>
            </tr>

            {postsData.map((data, i) => {
              return (
                <tr key={i}>
                  <td > <img src={data.img} alt={`Image for ${data.name}`} />
                  </td>
                  <td>{data.name}</td>

                  <td>
                    <Link to="/addcategory">
                      <button onClick={deleteform} name={data.id}>
                        Delete
                      </button>
                    </Link>
                  </td>

                </tr>

              );
            })}
          </div>

        </table>
      </div>
    
    </>
  );
};
export default DeleteProduct;

