import React from "react";
import styled from "styled-components";
import AccordionT from "../components/AccordionT";

import { Wrapper } from "../components/StyledComponents/Wrapper";
import DreamHealthCheckups from "../components/TestPageComponents/DreamHealthCheckups";
import Hero from "../components/TestPageComponents/Hero";
import CustomerSlider from "../components/CustomerSlider";
import { graphql } from "gatsby";

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
    data.strapiTestPages.data[0].attributes;
  return (
    <Wrapper>
      <Container>
        <Hero banner={banner} />
        <AccordionT marginTop="var(--tmt1)" accordion={accordion} />
        <DreamHealthCheckups />
        <CustomerSlider data={customer_reviews.data[0].attributes} testPage title="What Our Customer Say about us" />
      </Container>
    </Wrapper>
  );
}

export default Index;

export const query = graphql`
  query TestPageWuery($slug: String) {
    strapiTestPages(
      data: { elemMatch: { attributes: { slug: { eq: $slug } } } }
    ) {
      data {
        attributes {
          slug
          checkups {
            description
            id
            title
            image_with_links {
              LinkTo
              test_images {
                data {
                  attributes {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: TRACED_SVG)
                      }
                    }
                  }
                }
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
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: TRACED_SVG)
                    }
                  }
                }
              }
            }
          }
          accordion {
            title
            id
            description
            icon {
              data {
                attributes {
                  url
                }
              }
            }
          }
          customer_reviews {
            data {
              attributes {
                customer_review {
                  description
                  id
                  name_of_the_customer
                }
              }
            }
          }
        }
      }
    }
  }
`;
