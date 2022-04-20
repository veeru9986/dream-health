import React from "react";
import styled from "styled-components";
import CustomerSlider from "../components/CustomerSlider";
import Hero from "../components/Hero";
import MostCommonTest from "../components/MostCommonTest";
import Seo from "../components/Seo/Seo";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import WhyDreamHealth from "../components/WhyDreamHealth";
import { graphql } from "gatsby";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function Index({ location, data }) {
  const { HomeBanner, test_links, why_dream_health, customer_say_about_us } =
    data.strapiHome;
  return (
    <Wrapper>
      <Container>
        <Seo title="Home" loacation={`${location.pathname}`} />
        <Hero data={HomeBanner} />
        <MostCommonTest title={test_links.main_title} data={test_links} />
        <WhyDreamHealth data={why_dream_health} />
        <CustomerSlider
          title={customer_say_about_us.main_title}
          data={customer_say_about_us}
        />
      </Container>
    </Wrapper>
  );
}

export default Index;

export const homeQuery = graphql`
  {
    strapiHome {
      HomeBanner {
        title
        id
        description
        home_banner_button {
          button_link
          button_title
        }
        banner_image {
          file {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                layout: FULL_WIDTH
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
      test_links {
        test_links {
          LinkTo
          id
          title
          test_images {
            file {
              childImageSharp {
                gatsbyImageData(formats: AUTO, placeholder: TRACED_SVG)
              }
            }
          }
        }
        main_title
      }
      why_dream_health {
        description 
        title
        image {
          file {
            childImageSharp {
              gatsbyImageData(formats: AUTO, placeholder: TRACED_SVG)
            }
          }
        }
        buttons {
          button_link
          button_title
        }
      }
      customer_say_about_us {
        main_title
        customer_reviews {
          description
          name_of_the_customer
          id
        }
      }
    }
  }
`;

