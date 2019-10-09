import React, { useState, useEffect } from 'react';
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
//posed
import posed from 'react-pose';

//styled
const HomeWrap = styled.section`
  position: relative;
`;

const HomeHero = styled.div`
  position: relative;
  padding-top: ${vars.rems.f150};
  padding-bottom: ${vars.rems.f150};
  border-bottom: 1px solid #f6edfa;
  background-color: #fcfaff;
  overflow: hidden;
  text-align: center;
  > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${vars.colors.purple};
  }
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

//posed
const PosedHeroBG = posed.span({
  init: {
    y: 0,
  },
  enter: {
    y: '-100%',
    delay: 200,
    transition: {
      duration: 700,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const PosedHeroLogo = posed.div({
  init: {
    opacity: 0,
    y: -100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1000,
      ease: [0.22, 1, 0.36, 1],
    },
    delay: 700,
  }
});

const PosedHerotexts = posed.div({
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1000,
      ease: [0.22, 1, 0.36, 1],
    },
    delay: 800,
  }
});

const Home = () => {

  //state
  const [state, setState] = useState(false);
  
  //toggle state
  useEffect(() => {
    setState(true);
    return () => {
      setState(false);
    };
  },[]);

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
            <PosedHeroBG pose={state && 'enter'} /> 
            <Container>
              <PosedHeroLogo pose={state && 'enter'}>
                <div className="image-wrap">
                  <Image fluid={data.Image2.childImageSharp.fluid} center />
                </div>
              </PosedHeroLogo>
              <PosedHerotexts pose={state && 'enter'}>
                <Heading heading1>{data.site.siteMetadata.title}</Heading>
                <p>{data.site.siteMetadata.description}</p>
              </PosedHerotexts>
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