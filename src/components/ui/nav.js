import React, { useContext } from 'react';
//gatsby
import { Link } from 'gatsby';
//context
import { GlobalContext } from 'context/';
//styles
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import vars from 'components/styles/varss';
//hooks
import { useWindowSize } from 'components/hooks/useWindowSize';

//styled
const NavLinks = styled.nav`
  position: relative;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    margin-right: -10px;
    li {
      a {
        display: block;
        padding: 5px 10px;
        color: ${rgba('#fff', 0.6)};
        &:hover,
        &:focus,
        &:active {
          color: #fff;
        }
        /* current page */
        &[aria-current='page'] {
          color: #fff;
        }
      }
    }
  }
`;

const NavToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 22px;
  padding: 2px 0;
  overflow: hidden;
  position: relative;
  transition: ${vars.transitions.hover1};
  color: ${vars.colors.textDark};
  cursor: pointer;
  &:hover {
    .nav-toggle-line {
      opacity: 0.8;
      &:nth-child(2) {
        transform: translateX(10px);
      }
    }
  }
  .nav-toggle-line {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: #fff;
    transition: ${vars.transitions.hover1};
  }
  ${props => props.active && css`
    .nav-toggle-line {
      background-color: #fff;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      &:nth-child(1) {
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(45deg);
      }
    }
  `}
`;

const Nav = () => {

  //use Context
  const [context, setContext] = useContext(GlobalContext);
  //toggle mobile nav
  const setMobileNavToggle = () =>{
    setContext({
      mobileNav: !context.mobileNav
    });
  };

  //window size
  const windowSize = useWindowSize();

  return (
    <NavLinks>
      {
        windowSize.width < vars.navBreakpoint ? (
          <NavToggle active={context.mobileNav} onClick={setMobileNavToggle}>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
          </NavToggle>
        ) : (
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        )
      }
    </NavLinks>
  );
};

export default Nav;