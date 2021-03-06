import React, { useContext, useRef, useEffect } from 'react';
//gatsby
import { Link, useStaticQuery, graphql } from 'gatsby';
//context
import { GlobalContext } from 'context/';
//styles
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import vars from 'components/styles/varss';
//components
import Container from 'components/ui/container';
import Nav from 'components/ui/nav';
//headeroom
import Headroom from 'react-headroom';

//styled
const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  background-color: rebeccapurple;
  height: ${vars.headerHeight}px;
  position: relative;
  z-index: 99;
  transition: ${vars.transitions.hover1};
  @media (max-width: ${vars.media.smMax}) {
    height: ${vars.headerHeightSm}px;
  }
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* scrolled */
  ${props => props.scrolled && css`
    height: ${vars.headerHeightSm}px;
  `}
`;

const Logo = styled.div`
  position: relative;
  a {
    font-size: ${rem('24px')};
    display: block;
    color: #fff;
    font-weight: bold;
    line-height: 1;
    &:hover,
    &:focus,
    &:active {
      color: #fff;
    }
  }
  img {
    max-width: 60px;
    height: auto;
    margin-left: -10px;
  }
`;

const Header = () => {

  //graphql query
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      },
      allFile(filter: {name: {eq: "gatsby-icon"}}) {
        edges {
          node {
            extension
            publicURL
            name
            id
          }
        }
      }
    }
  `);

  //use Context
  const [context, setContext] = useContext(GlobalContext);

  let browserWindow = {}
  if (typeof window !== 'undefined') {
    browserWindow = window;
  };

  //set header scrolled
  const setHeaderScrolled = (state) => {
    setContext({
      ...context,
      headerScrolled: state,
    });
  };

  //scroll Y ref
  const prevScrollY = useRef(0);

  //scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = browserWindow.scrollY;
      if (currentScrollY > vars.headerHeight) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
      prevScrollY.current = currentScrollY;
    };
    browserWindow.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      browserWindow.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Headroom style={{zIndex: 999}}>
      <HeaderWrap scrolled={context.headerScrolled}>
        <Container maxWidth="1920px">
          <Logo>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </Logo>
          <Nav/>
        </Container>
      </HeaderWrap>
    </Headroom>
  );
};

export default Header;