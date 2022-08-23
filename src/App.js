import React from 'react';
import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';
import Init from './components/Init';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Error404 from './components/Error404';
import Carrito from './components/Carrito';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1'
    },

    {
      id: 2,
      name: 'Product 2'
    },

    {
      id: 3,
      name: 'Product 3'
    },

    {
      id: 4,
      name: 'Product 4'
    }
  ];

  return (
    <Container>
      <Menu>
        <NavLink to={'/'}>Inicio</NavLink>
        <NavLink to={'/Blog'}>Blog</NavLink>
        <NavLink to={'/Tienda'}>Tienda</NavLink>
      </Menu>

      <main>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path='/' element={<Init />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Tienda' element={<Shop products={products}/>} />
        </Routes>
      </main>
      <aside>
        <Carrito />
      </aside>
    </Container>
  );
}

const Container = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;