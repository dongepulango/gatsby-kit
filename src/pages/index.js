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
import Image from '../components/image';
import Button from '../components/button';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const HomeWrap = styled.section`
  position: relative;
`;

const HomeHero = styled.div`
  position: relative;
  padding-top: ${vars.rems.f150};
  padding-bottom: ${vars.rems.f150};
  border-bottom: 1px solid #f6edfa;
  border-top: 1px solid #f6edfa;
  background: #fcfaff;
  text-align: center;
  .image-wrap {
    margin-bottom: 40px;
  }
  ${Heading} {
    font-weight: bold;
    margin-bottom: 15px;
  }
  p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HomeContent = styled.div`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;

const Home = () => {

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
      Image1: file(relativePath: {eq: "gatsby-astronaut.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
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
          <HomeHero>
            <Container>
              <div className="image-wrap">
                <Image fluid={data.Image2.childImageSharp.fluid} center />
              </div>
              <Heading heading1>{data.site.siteMetadata.title}</Heading>
              <p>{data.site.siteMetadata.description}</p>
            </Container>
          </HomeHero>
          <HomeContent>
            <Container>
              <Row>
                <Col md={6}>
                  <Image fluid={data.Image1.childImageSharp.fluid} center />
                </Col>
                <Col md={6}>
                  <Heading heading2 as={'h2'}>Welcome</Heading>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eum, enim perspiciatis magni dolorem eos ad, rem excepturi cumque voluptatum, autem sapiente laborum commodi non. Voluptas dolores et nemo ea dignissimos tempore nesciunt nostrum, commodi odit minima earum possimus voluptates illum enim asperiores omnis nulla atque ut pariatur nisi, voluptate labore fugit placeat? Ipsam, tenetur quae iusto, cum molestiae fuga.</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eum, enim perspiciatis magni dolorem eos ad, rem excepturi cumque voluptatum, autem sapiente laborum commodi non. Voluptas dolores et nemo ea dignissimos tempore nesciunt nostrum.</p>
                  <br />
                  <Link to="/blog">
                    <Button primary>Visit Blog</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </HomeContent>
        </HomeWrap>
      </PageTransition>
    </Layout>
  );
};

export default Home;