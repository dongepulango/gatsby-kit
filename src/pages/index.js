import React from 'react';
//gatsby
import { useStaticQuery, graphql } from 'gatsby';

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
import Image from '../components/image';

//styled
const HomeWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;

const Home = () => {

  //graphql query
  const data = useStaticQuery(graphql`
    query {
      Image1: file(relativePath: {eq: "gatsby-astronaut.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      Image2: file(relativePath: {eq: "gatsby-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <PageTransition>
        <HomeWrap>
          <Container>
            <Heading heading1>Welcome</Heading>
            <Image fluid={data.Image2.childImageSharp.fluid} center />
            <Image fluid={data.Image1.childImageSharp.fluid} center />
          </Container>
        </HomeWrap>
      </PageTransition>
    </Layout>
  );
};

export default Home;