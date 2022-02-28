import React from "react";
import styled from "styled-components";
import Hero from "../components/AboutUsComponents/Hero";
import PeopleBehindDreamHealth from "../components/AboutUsComponents/PeopleBehindDreamHealth";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import { graphql } from "gatsby"

export const query = graphql`
  {
    strapiAbout {
      data {
        attributes {
          banner {
            description
            title
            image {
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(formats: AUTO, placeholder: TRACED_SVG)
                    }
                  }
                }
              }
            }
          }
          people_behind_dream_health {
            title
            description
            id
            people {
              designation
              id
              name_and_useranme
              image {
                data {
                  attributes {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: TRACED_SVG, formats: AUTO)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function AboutUs({data}) {
  const {banner, people_behind_dream_health} = data.strapiAbout.data.attributes
  return (
    <Wrapper>
      <Container>
        <Hero data={banner} />
        <PeopleBehindDreamHealth data={people_behind_dream_health} />
      </Container>
    </Wrapper>
  );
}

export default AboutUs;
