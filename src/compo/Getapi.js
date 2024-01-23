import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

const Getapi = () => {
  //useState() for set the data

  const [postsData, setPosts] = React.useState(null);
  const [msg, setMsg] = React.useState('');

  // create fetch() to fetch the data .....inside useEffect()........ every fetch() return a promise to avoid we use .then()

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setPosts(result);
      });
  }, []);

//   const deleteform = (e) => {
//     if (window.confirm('Are you sure want to delete?')) {
//       fetch(`http://localhost:3000/posts/${e.target.name}`, {
//         method: 'DELETE',
//       })
//         .then((res) => res.json)
//         .then((result) => {
//           setMsg('data deleted');
//           get();
//         });
//     }
//   };

  if (postsData == null) {
    return <p> loading....</p>;
  }

  return (
    <>
      <table border="1">
        <tr>
          <th>ID</th>

          <th>Title</th>
          <th>Author</th>
          <th>Update</th>
          <th>DELETE</th>
        </tr>

        {postsData.map((data, i) => {
          return (
            <tr key={i}>
              <td>{data.id}</td>
              <td> <img src={data.img} alt={`Image for ${data.name}`} />
</td>
              <td>{data.name}</td>
              
            </tr>
          );
        })}
      </table>
      <p>{msg}</p>
    </>
  );
};
export default Getapi;
