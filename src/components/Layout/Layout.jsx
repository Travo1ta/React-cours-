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
                     Каталог
                  </NavLink>
               </NavItem>
               {/* Можно добавить другие ссылки */}
               <NavItem>
                  <NavLink to="/about">
                     О нас
                  </NavLink>
               </NavItem>
            </Nav>
         </Header>

         {/* Outlet - сюда будут вставляться дочерние компоненты */}
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