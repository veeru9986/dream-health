import React from "react";
import styled from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";

const Container = styled.div`
  grid-area: auto/2/auto/3;
  margin-top: var(--mt1);

  .heading{
    width: 250px;
    word-wrap: break-word;
  }
  h2 {
    line-height: var(--lineHeight);
    font-weight: var(--xheavyWeight);
  }
  p {
    font-size: var(--p2);
    color: var(--black);
    margin: 0.8rem 0;
  }

  .para {
    width: 50%;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .people-behind-dream-health {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
      justify-content: center;
    }

    .avatar-img-section {
      width: 272.37px;
      height: 272.73px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin: 0 2rem 5rem 0;
      position: relative;
      @media (max-width: 767px) {
        margin: 0 0 5rem 0;
      }
      .avatar-text-section {
        position: absolute;
        bottom: -15%;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        right: -10%;

        .avatar-text {
          width: 95%;
          background: #ffffff;
          box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 0.8rem;

          h4 {
            text-transform: capitalize;
            font-size: var(--h4);
            font-weight: var(--mediumWeight);
          }
          span {
            font-size: var(--p2);
            font-weight: var(--xmediumWeight);
          }
        }
      }
    }
  }
`;

function PeopleBehindDreamHealth({ data }) {
  const { title, description, people } = data;
  return (
    <Container>
      <div className="heading">
        <h2>{title}</h2>
      </div>
      <div className="para">
        <p>{description}</p>
      </div>
      <div className="people-behind-dream-health">
        {people.map((p) => {
          return (
            <div className="avatar-img-section">
              <div className="image">
                <GatsbyImage
                  image={
                    p.image.data.attributes.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={title}
                />
                <img src={p.img} alt={p.name} />
              </div>
              <div className="avatar-text-section">
                <div className="avatar-text">
                  <h4>{p.name_and_useranme}</h4>
                  <span>{p.designation}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default PeopleBehindDreamHealth;
