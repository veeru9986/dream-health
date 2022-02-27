import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: auto/2/auto/3;
  margin-top: var(--mt1);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: var(--xheavyWeight);
  }

  .most-common-test-grid {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-around;
    margin-top: 1rem;
    .grid_images {
      display: block;
      width: 271.44px;
      height: 271.44px;
      border-radius: 10px;
      img {
        opacity: 0.9 !important;
      }
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      @media (max-width: 479px) {
        margin: 1rem 0;
      }
    }
  }
  a {
    border-radius: 10px;
    margin: 1rem 2rem;
  }
  /* a {
    border-radius: 10px;
    margin: 1rem 2rem;

    transition: background-size 500ms;
    position: relative;
    background-image: linear-gradient(
      90deg,
      rgba(0, 81, 135, 0.8995799003195029) 0%,
      rgba(0, 113, 188, 1) 0%,
      rgba(6, 7, 8, 0.8939776594231442) 0%
    );
    background-size: 0 100%;
    background-repeat: no-repeat;
    background-position: right;
  }

  a:hover {
    background-size: 100% 100%;
    background-position-x: left;
  } */
`;

function MostCommonTest({ title, data }) {
  return (
    <Container>
      <div className="heading">
        <h2>{title}</h2>
      </div>
      <div className="most-common-test-grid">
        {data.test_links.map((t) => (
          <Link to={t.LinkTo} key={t.id} className="test-links">
            <div className="grid_images bg-anim">
              <GatsbyImage
                image={
                  t.test_images.data === null
                    ? ""
                    : t.test_images.data.attributes.localFile.childImageSharp
                        .gatsbyImageData
                }
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default MostCommonTest;
