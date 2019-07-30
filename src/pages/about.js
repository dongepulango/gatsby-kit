import React from 'react';
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
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const AboutWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;

const About = () => {
  return (
    <Layout>
      <PageTransition>
        <SEO title="About" />
        <AboutWrap>
          <Container>
            <Heading heading1>About</Heading>
            <Row>
              <Col md={6}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsa magni ex, ducimus a autem iure illo molestias voluptatibus dolorem pariatur, voluptates distinctio. Cumque odit ipsam, debitis minima rem adipisci aspernatur perspiciatis quaerat labore eius eum doloribus blanditiis dolorum, ut voluptatibus cum enim numquam, fuga facilis maiores! Culpa, eligendi id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eum, enim perspiciatis magni dolorem eos ad, rem excepturi cumque voluptatum, autem sapiente laborum commodi non. Voluptas dolores et nemo ea dignissimos tempore nesciunt nostrum, commodi odit minima earum possimus voluptates illum enim asperiores omnis nulla atque ut pariatur nisi, voluptate labore fugit placeat? Ipsam, tenetur quae iusto, cum molestiae fuga, quisquam rem nostrum facilis suscipit animi. Aperiam voluptates eveniet ullam hic repellendus, ipsum accusantium maxime consectetur voluptatem animi numquam porro fugit expedita ipsam qui velit odit minima commodi! Animi blanditiis aliquid magni neque doloremque fugiat pariatur fugit eos alias aut? Eligendi.</p>
              </Col>
              <Col md={6}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsa magni ex, ducimus a autem iure illo molestias voluptatibus dolorem pariatur, voluptates distinctio. Cumque odit ipsam, debitis minima rem adipisci aspernatur perspiciatis quaerat labore eius eum doloribus blanditiis dolorum, ut voluptatibus cum enim numquam, fuga facilis maiores! Culpa, eligendi id.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eum, enim perspiciatis magni dolorem eos ad, rem excepturi cumque voluptatum, autem sapiente laborum commodi non. Voluptas dolores et nemo ea dignissimos tempore nesciunt nostrum, commodi odit minima earum possimus voluptates illum enim asperiores omnis nulla atque ut pariatur nisi, voluptate labore fugit placeat? Ipsam, tenetur quae iusto, cum molestiae fuga, quisquam rem nostrum facilis suscipit animi. Aperiam voluptates eveniet ullam hic repellendus, ipsum accusantium maxime consectetur voluptatem animi numquam porro fugit expedita ipsam qui velit odit minima commodi! Animi blanditiis aliquid magni neque doloremque fugiat pariatur fugit eos alias aut? Eligendi.</p>
              </Col>
            </Row>
          </Container>
        </AboutWrap>
      </PageTransition>
    </Layout>
  );
};

export default About;