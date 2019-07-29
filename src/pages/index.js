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

//styled
const HomeWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
`;

const DribbbleShots = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
  @media (min-width: ${vars.media.mdMin}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-left: -15px;
    margin-right: -15px;
  }
  li {
    margin-bottom: 40px;
    @media (min-width: ${vars.media.mdMin}) {
      min-width: 50%;
      width: 50%;
      padding-left: 15px;
      padding-right: 15px;
    }
    > a {
      display: block;
    }
    h2 {
      font-size: ${vars.rems.f18};
      margin-bottom: 10px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const Home = () => {

  //graphql query
  const data = useStaticQuery(graphql`
    query {
      allDribleProjects {
        edges {
          node {
            id
            height
            description
            cover
            shotID
            tags
            title
            url
            width
            published
          }
        }
      },
      dribleUser {
        id
        name
        username
        url
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <PageTransition>
        <HomeWrap>
          <Container>
            <Heading heading1>Dribbble shot's from <a href={data.dribleUser.url} target="_blank" rel="noopener noreferrer">{`@${data.dribleUser.username}`}</a></Heading>
            <DribbbleShots>
              {data.allDribleProjects.edges.map(item => (
                <li key={item.node.id}>
                  <a href={item.node.url} target="_blank" rel="noopener noreferrer">
                    <h2>{item.node.title}</h2>
                    <img src={item.node.cover} alt={item.node.title} />
                  </a>
                </li>
              ))}
            </DribbbleShots>
          </Container>
        </HomeWrap>
      </PageTransition>
    </Layout>
  );
};

export default Home;