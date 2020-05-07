import React from 'react';
//styles
import styled from 'styled-components';
import vars from 'components/styles/varss';
//seo
import SEO from 'components/utils/seo';
//components
import Layout from 'components/ui/layout';
import Container from 'components/ui/container';
import Heading from 'components/ui/heading';

//styled
const Error404Wrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;

const Error404 = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Error404Wrap>
        <Container>
          <Heading heading1>404 NOT FOUND</Heading>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Error404Wrap>
    </Layout>
  );
};

export default Error404;