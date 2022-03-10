import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import EditProduct from './Components/Admin/EditProduct/EditProduct';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import Cart from './Components/Cart/Cart';
import Cosmograph from './Components/Cosmograph/Cosmograph';
import MyNavbar from './Components/Header/MyNavbar';
import Home from './Components/Home/Home';
import Payment from './Components/Payment/Payment';
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';
import ProductList from './Components/Product/ProductList/ProductList';
import ProductStar from './Components/ProductStar/ProductStar';
import ProductsContextProvider from './Contexts/ProductsContext';



const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
            <MyNavbar />
                <Routes>
                    <Route path='/list' element={<ProductList/>}/>
                    <Route path='/add' element={<AddProduct/>} />
                    <Route path='/' element={<Home/>} />
                    <Route path='list/edit/:id' element={<EditProduct/>} />
                    <Route path='/detail/:id' element={<ProductDetail/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/cosmograph' element={<Cosmograph/>}/>         
                    <Route path='/pay' element={<Payment/>} />
                    <Route path='/star' element={<ProductStar/>} />
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;