import logo from './logo.svg';
// import Getapi from './compo/Getapi';
import NavBar from './compo/NavBar';
import HomeCard from './compo/HomeCard';
import HomePage from './compo/HomePage';
import Footer from './compo/Footer';
import Products from './products/Products';
import Admin from './Admin/Admin';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './Admin/AddProduct';
import DeleteProduct from './Admin/DeleteProduct';
import UpdateProduct from './Admin/UpdateProduct';
import UpdateForm from './Admin/UpdateForm';
// import Products from './products/Products';
// import {  Route,  Routes } from 'react-router-dom';

function App() {
  return (<>
        
      <Routes>
      <Route
            path="/"
            element={
              <div>
                {/* <Getapi/> */}
                <NavBar/>
                <HomePage/>
              <HomeCard />
              <Footer/>
              </div>
            }
          />


          <Route path='/prd' element={<Products/>}/>
          <Route path='/adminhomepage' element={<Admin/>}/>


          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/addcategory' element={<DeleteProduct/>}/>
          
          <Route path='/updateform' element={<UpdateProduct/>}/>

          <Route path="/update/:id" element={<UpdateForm />} />

          
</Routes>

      
  



      </> );
}

export default App;


