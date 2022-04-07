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

  .test-links {
    position: relative;

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
  }
`;

function MostCommonTest({ title, data }) {
  console.log(data);

  return (
    <Container>
      <div className="heading">
        <h2>{title}</h2>
      </div>
      <div className="most-common-test-grid">
        {data.test_links.map((t) => (
          <Link to={t.LinkTo} key={t.id} className="test-links">
            <div className="content-overlay" />
            <div className="grid_images bg-anim">
              <GatsbyImage
                image={
                  t.test_images === null
                    ? ""
                    : t.test_images.file.childImageSharp.gatsbyImageData
                }
                alt=""
              />
              <div className="hover-slide-up">
                <div className="hover-slide-text-up">
                  <p>
                    {t.title
                      ? t.title
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default MostCommonTest;
