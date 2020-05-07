import React from 'react';
//gatsby
import { Link, useStaticQuery, graphql } from 'gatsby';
//styles
import styled from 'styled-components';
import vars from 'components/styles/varss';
//seo
import SEO from 'components/utils/seo';
//components
import Layout from 'components/ui/layout';
import Container from 'components/ui/container';
import Heading from 'components/ui/heading';
//blog components
import Archive from 'components/blog/archive';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const BlogWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;

const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 4px solid #fafafa;
    h2 {
      margin-bottom: 10px;
      font-weight: bold;
      > a {
        color: ${vars.colors.textDark};
        &:hover,
        &:focus,
        &:active {
          color: rebeccapurple;
        }
      }
      span {
        display: block;
        color: ${vars.colors.textLight};
        font-weight: normal;
        font-size: ${vars.rems.f16};
        line-height: 2;
      }
    }
    p {
      font-size: ${vars.rems.f18};
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
    > a {
      display: inline-block;
      margin-top: 20px;
      color: rebeccapurple;
      border-bottom: 1px solid rebeccapurple;
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
            id
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
            excerpt(pruneLength: 200)
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Blog" />
      <BlogWrap>
        <Container>
          <Row>
            <Col md={8}>
              <BlogList>
                {data.allMarkdownRemark.edges.map((item) => (
                  <li key={item.node.id}>
                    <Heading heading1 as={'h2'}>
                      <Link to={`${item.node.frontmatter.slug}`}>{item.node.frontmatter.title}</Link>
                      <span>{item.node.frontmatter.date}</span>
                    </Heading>
                    <p>{item.node.excerpt}</p>
                    <Link to={`${item.node.frontmatter.slug}`}>Read More</Link>
                  </li>
                ))}
              </BlogList>
            </Col>
            <Col md={4}>
              <Archive />
            </Col>
          </Row>
        </Container>
      </BlogWrap>
    </Layout>
  );
};

export default Blog;