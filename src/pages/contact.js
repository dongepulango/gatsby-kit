import React from 'react';
//styles
import styled from 'styled-components';
import vars from '../components/varss';
//components
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import Heading from '../components/heading';

//styled
const ContactWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactWrap>
        <Container>
          <Heading heading1>Contact</Heading>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eum, enim perspiciatis magni dolorem eos ad, rem excepturi cumque voluptatum, autem sapiente laborum commodi non. Voluptas dolores et nemo ea dignissimos tempore nesciunt nostrum, commodi odit minima earum possimus voluptates illum enim asperiores omnis nulla atque ut pariatur nisi, voluptate labore fugit placeat? Ipsam, tenetur quae iusto, cum molestiae fuga, quisquam rem nostrum facilis suscipit animi. Aperiam voluptates eveniet ullam hic repellendus, ipsum accusantium maxime consectetur voluptatem animi numquam porro fugit expedita ipsam qui velit odit minima commodi! Animi blanditiis aliquid magni neque doloremque fugiat pariatur fugit eos alias aut? Eligendi, architecto hic! Officia, praesentium iure! Dolorem eligendi tempore assumenda quae quasi et nihil fuga placeat repellat, voluptates nostrum id dolor molestias pariatur ipsa fugiat enim omnis cumque. Perspiciatis sequi corporis optio officia itaque ex commodi facere similique nemo accusamus quae libero harum blanditiis suscipit beatae nisi possimus, exercitationem quaerat laboriosam? Sint maxime pariatur illo ipsam, quidem et, asperiores mollitia saepe libero dignissimos harum. Vel maxime perspiciatis minus. Provident dolor id consequatur commodi libero molestias magnam aperiam cupiditate corrupti ea fugit harum et, quis mollitia reiciendis laborum facilis totam quibusdam earum? Voluptatibus molestiae, consectetur vero error exercitationem quam voluptatem beatae.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eum, enim perspiciatis magni dolorem eos ad, rem excepturi cumque voluptatum, autem sapiente laborum commodi non. Voluptas dolores et nemo ea dignissimos tempore nesciunt nostrum, commodi odit minima earum possimus voluptates illum enim asperiores omnis nulla atque ut pariatur nisi, voluptate labore fugit placeat? Ipsam, tenetur quae iusto, cum molestiae fuga, quisquam rem nostrum facilis suscipit animi. Aperiam voluptates eveniet ullam hic repellendus, ipsum accusantium maxime consectetur voluptatem animi numquam porro fugit expedita ipsam qui velit odit minima commodi! Animi blanditiis aliquid magni neque doloremque fugiat pariatur fugit eos alias aut? Eligendi, architecto hic! Officia, praesentium iure! Dolorem eligendi tempore assumenda quae quasi et nihil fuga placeat repellat, voluptates nostrum id dolor molestias pariatur ipsa fugiat enim omnis cumque. Perspiciatis sequi corporis optio officia itaque ex commodi facere similique nemo accusamus quae libero harum blanditiis suscipit beatae nisi possimus, exercitationem quaerat laboriosam? Sint maxime pariatur illo ipsam, quidem et, asperiores mollitia saepe libero dignissimos harum. Vel maxime perspiciatis minus. Provident dolor id consequatur commodi libero molestias magnam aperiam cupiditate corrupti ea fugit harum et, quis mollitia reiciendis laborum facilis totam quibusdam earum? Voluptatibus molestiae, consectetur vero error exercitationem quam voluptatem beatae.</p>
        </Container>
      </ContactWrap>
    </Layout>
  );
};

export default Contact;