import React from 'react';
//gatsby
import { useStaticQuery, graphql } from 'gatsby';
//styles
import styled from 'styled-components';
import vars from 'components/styles/varss';
//components
import SEO from 'components/ui/seo';
import Layout from 'components/ui/layout';
import Container from 'components/ui/container';
import Heading from 'components/ui/heading';
import Image from 'components/ui/image';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const AboutWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
  ${Heading} {
    text-align: center;
    margin-bottom: 60px;
  }
`;

const AboutPeople = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  li {
    text-align: center;
    min-width: 25%;
    width: 25%;
    margin-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    img {
      display: block;
      margin-bottom: 10px;
      width: 100px;
      height: 100px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }
    h3 {
      margin-bottom: 0;
      font-size: ${vars.rems.f18};
      font-weight: 500;
    }
    p {
      font-size: ${vars.rems.f14};
      opacity: 0.7;
    }
  }
`;

const About = () => {

  //graphql query
  const data = useStaticQuery(graphql`
    query {
      allDataJson(limit: 8) {
        edges {
          node {
            id
            name
            email
            position
            photo {
              childImageSharp {
                fixed(width: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About" />
      <AboutWrap>
        <Container>
          <Heading heading1>About</Heading>
          <AboutPeople>
            {data.allDataJson.edges.map((item) => (
              <li key={item.node.id}>
                <Image fixed={item.node.photo.childImageSharp.fixed} />
                <h3>{item.node.name}</h3>
                <p>{item.node.email}</p>
                <p>{item.node.postion}</p>
              </li>
            ))}
          </AboutPeople>
          <Row>
            <Col md={6}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eum, enim perspiciatis magni dolorem eos ad, rem excepturi cumque voluptatum, autem sapiente laborum commodi non. Voluptas dolores et nemo ea dignissimos tempore nesciunt nostrum, commodi odit minima earum possimus voluptates illum enim asperiores omnis nulla atque ut pariatur nisi, voluptate labore fugit placeat? Ipsam, tenetur quae iusto, cum molestiae fuga, quisquam rem nostrum facilis suscipit animi. Aperiam voluptates eveniet ullam hic repellendus, ipsum accusantium maxime consectetur voluptatem animi numquam porro fugit expedita ipsam qui velit odit minima commodi! Animi blanditiis aliquid magni neque doloremque fugiat pariatur fugit eos alias aut? Eligendi.</p>
            </Col>
            <Col md={6}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsa magni ex, ducimus a autem iure illo molestias voluptatibus dolorem pariatur, voluptates distinctio. Cumque odit ipsam, debitis minima rem adipisci aspernatur perspiciatis quaerat labore eius eum doloribus blanditiis dolorum, ut voluptatibus cum enim numquam, fuga facilis maiores! Culpa, eligendi id.</p>
            </Col>
          </Row>
        </Container>
      </AboutWrap>
    </Layout>
  );
};

export default About;