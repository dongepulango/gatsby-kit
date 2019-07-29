import React from 'react';
//gatsby
import { Link, useStaticQuery, graphql } from 'gatsby';
//styles
import styled from 'styled-components';
import vars from '../components/varss';
//page transition
import PageTransition from 'gatsby-plugin-page-transitions';
//components
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import Heading from '../components/heading';

//styled
const BlogWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 30px;
      > a {
        color: ${vars.colors.text};
        &:hover {
          color: ${vars.colors.blue};
        }
      }
      h2 {
        font-size: ${vars.rems.f18};
        margin-bottom: 5px;
        span {
          color: ${vars.colors.textLight};
          font-weight: normal;
          font-size: ${vars.rems.f14};
        }
      }
    }
  }
`;

const Blog = () => {

  //graphql query
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 3, sort: {order: ASC, fields: frontmatter___date}) {
        edges {
          node {
            headings {
              value
              depth
            }
            id
            frontmatter {
              title
              slug
              date
            }
            excerpt(pruneLength: 200)
          }
        }
      }
    }
  `);

  //console.log(data.allMarkdownRemark.edges);

  return (
    <Layout>
      <SEO title="Blog" />
      <PageTransition>
        <BlogWrap>
          <Container>
            <Heading heading1>Blog</Heading>
            <ul>
              {data.allMarkdownRemark.edges.map((item) => (
                <li key={item.node.id}>
                  <Link to={`${item.node.frontmatter.slug}`}>
                    <h2>{item.node.frontmatter.title} <span>{item.node.frontmatter.date}</span></h2>
                    <p>{item.node.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </BlogWrap>
      </PageTransition>
    </Layout>
  );
};

export default Blog;