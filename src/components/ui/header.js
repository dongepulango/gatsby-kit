import React from 'react';
//gatsby
import { Link, useStaticQuery, graphql } from 'gatsby';
//styles
import styled from 'styled-components';
import { rgba } from 'polished';
import vars from 'components/styles/varss';
//components
import Container from 'components/ui/container';
//headeroom
import Headroom from 'react-headroom';

//styled
const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  background-color: rebeccapurple;
  height: ${vars.headerHeight}px;
  position: relative;
  z-index: 9;
  transition: ${vars.transitions.hover1};
  @media (max-width: ${vars.media.smMax}) {
    height: ${vars.headerHeightSm}px;
  }
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  position: relative;
  a {
    font-size: ${vars.rems.f24};
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

  return (
    <Headroom>
      <HeaderWrap>
        <Container maxWidth="1920px">
          <Logo>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </Logo>
          <NavLinks>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </NavLinks>
        </Container>
      </HeaderWrap>
    </Headroom>
  );
};

export default Header;