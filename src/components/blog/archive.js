import React from 'react';
//gatsby
import { Link, useStaticQuery, graphql } from 'gatsby';
//styles
import styled from 'styled-components';
//components
import Heading from 'components/ui/heading';

//styled
const ArchiveWrap = styled.section`
  position: relative;
  ${Heading} {
    margin-bottom: 30px!important;
    font-weight: 500!important;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 10px;
      a {
        display: inline-block;
        color: rebeccapurple;
        border-bottom: 1px solid transparent;
        &:hover,
        &:focus,
        &:active {
          border-color: rebeccapurple;
        }
      }
    }
  }
`;

const Archive = () => {

  //graphql query
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 10, sort: {order: ASC, fields: frontmatter___date}) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <ArchiveWrap>
      <Heading heading3 as={'h3'}>Archives</Heading>
      <ul>
        {data.allMarkdownRemark.edges.map((item) => (
          <li key={item.node.id}>
            <Link to={`${item.node.frontmatter.slug}`}>{item.node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </ArchiveWrap>
  );
};

export default Archive;