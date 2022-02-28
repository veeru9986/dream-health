import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  grid-area: auto/2/auto/3;

  h2 {
    font-weight: var(--xheavyWeight);
    text-transform: capitalize;
  }
  a {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .services-section-section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--mt);

    @media (max-width: 479px) {
      justify-content: center;
      margin-right: 0;
    }
    .services-section {
      width: 271.44px;
      height: 271.44px;
      border-radius: 10px;
      margin: 0 1rem 2rem 0;
      background: #ebebeb;

      @media (max-width: 479px) {
        margin-right: 0;
      }
      .gatsby-image-wrapper{
         border-radius: 10px;
      }
    }
  }
`;

function services({ data, title }) {
  return (
    <Container>
      <div className="heading">
        <h2>{title}</h2>
      </div>
      <div className="services-section-section">
        {data.map((d) => (
          <div className="services-section" key={d.id}>
            <Link to="/">
              <GatsbyImage
                image={
                  d.test_images.data.attributes.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={title}
              />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default services;
