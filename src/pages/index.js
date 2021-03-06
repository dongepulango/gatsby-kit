import React from 'react';
//gatsby
import { Link, useStaticQuery, graphql } from 'gatsby';
//styles
import styled from 'styled-components';
import { rem } from 'polished';
//seo
import SEO from 'components/utils/seo';
//components
import Layout from 'components/ui/layout';
import Container from 'components/ui/container';
import Heading from 'components/ui/heading';
import Image from 'components/ui/image';
import Button from 'components/ui/button';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const HomeWrap = styled.section`
  position: relative;
`;

const HomeHero = styled.div`
  position: relative;
  padding-top: ${rem('150px')};
  padding-bottom: ${rem('150px')};
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
  padding-top: ${rem('100px')};
  padding-bottom: ${rem('100px')};
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
            src
            presentationWidth
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
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
    </Layout>
  );
};

export default Home;