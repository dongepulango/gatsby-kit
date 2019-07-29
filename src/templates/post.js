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
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
`;

const PostHTML = styled.div`
  position: relative;
`;

const Post = (props) => {
  return (
    <Layout>
      <SEO title="Post" />
      <PageTransition>
        <PostWrap>
          <Container>
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