import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { LinkStyled } from "../StyledComponents/Wrapper";

const Container = styled.div`
  width: 100%;
  grid-area: auto/2/auto/3;
  margin-top: var(--mt1);

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-weight: var(--xheavyWeight);
    }
    span {
      font-size: var(--p1);
      color: var(--black);
      font-weight: var(--lightWeight);
      @media (max-width: 479px) {
        text-align: center;
        width: 80%;
      }
    }
  }
  .dream-health-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--mt);
    flex-wrap: wrap;
    @media (max-width: 767px) {
      justify-content: space-around;
    }
    @media (max-width: 479px) {
      justify-content: center;
    }
    .dream-health {
      border-radius: 10px;
      width: 300px;
      height: 300px;
      margin-bottom: 1rem;

      .gatsby-image-wrapper {
        height: 300px;
        border-radius: 10px;
      }
    }
  }
  .view-all-btn {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;

function DreamHealthCheckups({ data }) {
  const [show, setShow] = React.useState(4);
  return (
    <Container>
      <div className="heading">
        <h2>{data.title}</h2>
        <span>{data.description}</span>
      </div>

      <div className="dream-health-flex">
        {data.image_with_links.slice(0, show).map((g) => (
          <div className="dream-health" key={g.id}>
            <GatsbyImage
              image={g.test_images.file.childImageSharp.gatsbyImageData}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="view-all-btn">
        <LinkStyled to="/">View All</LinkStyled>
      </div>
    </Container>
  );
}

export default DreamHealthCheckups;
