import React, { useContext, useEffect } from 'react';
//context
import { GlobalContext } from 'context/';
//gatsby
import { Link } from 'gatsby';
//styles
import styled, { css } from 'styled-components';
import { rgba, rem } from 'polished';
import vars from 'components/styles/varss';
//hooks
import { useWindowSize } from 'components/hooks/useWindowSize';

//styled
const MobileNavWrap = styled.nav`
  position: fixed;
  margin: auto;
  top: ${vars.headerHeightSm - 1}px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: ${vars.transitions.hover1};
  will-change: opacity;
  background-color: ${rgba('#fff', 0.95)};
  ${props => props.active && css`
    opacity: 1;
    pointer-events: auto;
  `}
`;

const MobileNavInner = styled.div`
  position: relative;
  margin-top: ${vars.headerHeight}px;
  height: calc(100vh - ${vars.navHeight}px);
  overflow-y: scroll;
  padding-top: ${vars.headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileNavContent = styled.div`
  position: relative;
  text-align: center;
  padding-top: ${vars.headerHeight}px;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  transform: translateY(-${vars.headerHeight}px);
  li {
    > a {
      font-size: ${rem('22px')};
      color: #000;
      /* Current Page */
      &[aria-current='page'] {
        color: ${vars.colors.blue};
      }
    }
  }
`;

const MobileNav = () => {

  //use Context
  const [context, setContext] = useContext(GlobalContext);
  //toggle mobile nav
  const closeMobileNav = () => {
    setContext({
      ...context,
      mobileNav: false
    });
  };

  //window size
  const windowSize = useWindowSize();

  //window load & resize
  useEffect(() => {
    const windowResize = () => {
      if (windowSize.width > vars.navBreakpoint) {
        if (context.mobileNav === true) {
          closeMobileNav();
        }
      }
    }
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  });

  return (
    windowSize.width < vars.navBreakpoint ? (
      <MobileNavWrap active={context.mobileNav}>
        <MobileNavInner>
          <MobileNavContent>
            <MobileNavLinks onClick={closeMobileNav}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </MobileNavLinks>
          </MobileNavContent>
        </MobileNavInner>
      </MobileNavWrap>
    ) : null
  );
};

export default MobileNav;