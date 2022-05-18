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

    color: #fff;
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
      /* background: #ebebeb; */
      position: relative;
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
      .content-overlay {
        background: rgba(0, 0, 0);
        position: absolute;
        height: 99%;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        -webkit-transition: all 0.4s ease-in-out 0s;
        -moz-transition: all 0.4s ease-in-out 0s;
        transition: all 0.4s ease-in-out 0s;
        border-radius: 10px;
      }
      .hover-slide-up {
        position: absolute;
        text-align: center;
        padding-left: 1em;
        padding-right: 1em;
        width: 100%;
        top: 50%;
        left: 50%;
        opacity: 0;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: all 0.3s ease-in-out 0s;
        -moz-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;

        p {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
        }
      }
      &:hover {
        .content-overlay {
          opacity: 1;
        }
        .hover-slide-up {
          top: 50%;
          left: 50%;
          opacity: 1;
        }
        .gatsby-image-wrapper {
          opacity: 0.4;
        }
      }
      @media (max-width: 479px) {
        margin-right: 0;
      }
      .gatsby-image-wrapper {
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
            <div className="content-overlay" />
            <div className="grid_images bg-anim">
              <GatsbyImage
                image={d.test_images.file.childImageSharp.gatsbyImageData}
                alt={title}
              />
            </div>

            <div className="hover-slide-up">
              <div className="hover-slide-text-up">
                <Link to={d.LinkTo}>
                  {d.title
                    ? d.title
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default services;
