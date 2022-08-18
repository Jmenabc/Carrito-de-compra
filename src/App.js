import React from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import Init from './components/Init';
import Shop from './components/Shop';
import Blog from './components/Blog';

const App = () => {
  return (
    <Container>
      <Menu>
        <NavLink to={'/'}>Inicio</NavLink>
        <NavLink to={'/Blog'}>Blog</NavLink>
        <NavLink to={'/Tienda'}>Tienda</NavLink>
      </Menu>

      <main>
        <Switch>
          <Route path='/' component={Init}/>
          <Route path='/Blog' component={Blog}/>
          <Route path='/Tienda' component={Shop}/>
        </Switch>
      </main>
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