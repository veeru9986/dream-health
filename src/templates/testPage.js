import React from "react";
import styled from "styled-components";
import AccordionT from "../components/AccordionT";

import { Wrapper } from "../components/StyledComponents/Wrapper";
import DreamHealthCheckups from "../components/TestPageComponents/DreamHealthCheckups";
import Hero from "../components/TestPageComponents/Hero";
import CustomerSlider from "../components/CustomerSlider";
import { graphql } from "gatsby";
import { useDispatch } from "react-redux";

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;

function Index({ data }) {
  const { banner, checkups, accordion, customer_reviews, slug } =
    data.strapiTestPage;
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Container>
        <Hero banner={banner} dispatch={dispatch} />
        <AccordionT marginTop="var(--tmt1)" accordion={accordion} />
        <DreamHealthCheckups data={checkups} />
        <CustomerSlider
          data={customer_reviews}
          testPage
          title="What Our Customer Say about us"
        />
      </Container>
    </Wrapper>
  );
}

export default Index;

export const query = graphql`
  query TestPageWuery($slug: String) {
    strapiTestPage(slug: { eq: $slug }) {
      slug
      checkups {
        description
        id
        title
        image_with_links {
          LinkTo
          test_images {
            file {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
            url
          }

        }
      }
      banner {
        description
        price
        title
        buttons {
          button_link
          button_title
        }
        image {
          file {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
      accordion {
        title
        id
        description
        icon {
          url
        }
      }
      customer_reviews {
        customer_review {
          description
          id
          name_of_the_customer
        }
      }
    }
  }
`;
