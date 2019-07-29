import React from 'react';
//styles
import styled from 'styled-components';
import vars from './varss';
//components
import Container from './container';

//styled
const FooterWrap = styled.footer`
  position: relative;
  background-color: #eee;
  padding-top: ${vars.rems.f30};
  padding-bottom: ${vars.rems.f30};
  text-align: center;
`;

const Footer = (props) => {
  return (
    <FooterWrap>
      <Container>
        <p>&copy; {new Date().getFullYear()}</p>
      </Container>
    </FooterWrap>
  );
};

export default Footer;