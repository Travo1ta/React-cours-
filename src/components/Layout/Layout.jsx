import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
   LayoutWrapper,
   Header,
   Nav,
   NavItem,
   Main,
   Footer
} from './styled';

const Layout = () => {
   return (
      <LayoutWrapper>
         <Header>
            <Nav>
               <NavItem>
                  <NavLink to="/" end>
                     Главная
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to="/catalog">
                     Каталог
                  </NavLink>
               </NavItem>
            </Nav>
         </Header>

         <Main>
            <Outlet />
         </Main>

         <Footer>
            <p>© 2024 Интернет-магазин 3D-товаров</p>
         </Footer>
      </LayoutWrapper>
   );
};

export default Layout;