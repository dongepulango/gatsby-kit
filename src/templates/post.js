import React from 'react';
//gatsby
import { graphql } from 'gatsby';
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
const PostWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
  ${Heading} {
    font-weight: 900;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-bottom: 40px;
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
    font-family: Georgia, 'Times New Roman', Times, serif;
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
      <PageTransition>
        <PostWrap>
          <Container maxWidth="800px">
            <Heading heading1>{props.data.markdownRemark.frontmatter.title}</Heading>
            <PostHTML dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
          </Container>
        </PostWrap>
      </PageTransition>
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