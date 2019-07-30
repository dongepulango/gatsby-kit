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
//grid
import { Row, Col } from 'styled-bootstrap-grid';

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
            <Row>
              <Col md={6}>
                <Heading heading1>Welcome</Heading>
                <Image fluid={data.Image2.childImageSharp.fluid} center />
                <Image fluid={data.Image1.childImageSharp.fluid} center />
              </Col>
              <Col md={6}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eum, enim perspiciatis magni dolorem eos ad, rem excepturi cumque voluptatum, autem sapiente laborum commodi non. Voluptas dolores et nemo ea dignissimos tempore nesciunt nostrum, commodi odit minima earum possimus voluptates illum enim asperiores omnis nulla atque ut pariatur nisi, voluptate labore fugit placeat? Ipsam, tenetur quae iusto, cum molestiae fuga, quisquam rem nostrum facilis suscipit animi. Aperiam voluptates eveniet ullam hic repellendus, ipsum accusantium maxime consectetur voluptatem animi numquam porro fugit expedita ipsam qui velit odit minima commodi! Animi blanditiis aliquid magni neque doloremque fugiat pariatur fugit eos alias aut? Eligendi.</p>
              </Col>
            </Row>
          </Container>
        </HomeWrap>
      </PageTransition>
    </Layout>
  );
};

export default Home;