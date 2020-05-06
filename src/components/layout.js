import React from 'react';
//router
import { useLocation } from "@reach/router";
//style
import styled, { createGlobalStyle } from 'styled-components';
import vars from './varss';
import reset from './reset';
import typography from './typography';
//page transition
import PageTransition from './pageTransition';
//components
import Header from "./header";
import Footer from "./footer";
//framer-motion
import { AnimatePresence } from 'framer-motion';

//Reset & Default Styles
const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

//styled
const LayoutWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

//styled
const Main = styled.main`
  position: relative;
  padding-top: ${vars.navHeight}px;
  min-height: 100vh;
`;

const Layout = ({ children }) => {

  //location
  const location = useLocation();

  return (
    <LayoutWrap>
      <GlobalStyle />
      <Header />
      <Main>
        <AnimatePresence exitBeforeEnter>
          <PageTransition location={location.pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </Main>
      <Footer />
    </LayoutWrap>
  );
};

export default Layout;