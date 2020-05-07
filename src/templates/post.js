import React from 'react';
//gatsby
import { graphql } from 'gatsby';
//styles
import styled from 'styled-components';
import vars from 'components/styles/varss';
//seo
import SEO from 'components/utils/seo';
//components
import Layout from 'components/ui/layout.js';
import Container from 'components/ui/container.js';
import Heading from 'components/ui/heading.js';
import Archive from 'components/blog/archive.js';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const PostWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
  ${Heading} {
    margin-bottom: 40px;
    font-weight: bold;
  }
`;

const PostHTML = styled.div`
  position: relative;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  p {
    font-size: ${vars.rems.f18};
    line-height: 2.3;
    font-family: Georgia, 'Times New Roman', Times, serif;
    + h1,
    + h2,
    + h3,
    + h4,
    + h5,
    + h6 {
      margin-top: 60px;
    }
  }
`;

const Post = (props) => {
  return (
    <Layout>
      <SEO title="Post" />
      <PostWrap>
        <Container>
          <Row>
            <Col md={8}>
              <Heading heading1>{props.data.markdownRemark.frontmatter.title}</Heading>
              <PostHTML dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
            </Col>
            <Col md={4}>
              <Archive />
            </Col>
          </Row>
        </Container>
      </PostWrap>
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($id: Int!) {
    markdownRemark(frontmatter: {id: {eq: $id}}) {
      id
      frontmatter {
        date
        id
        slug
        title
      }
      html
    }
  }
`;

export default Post;