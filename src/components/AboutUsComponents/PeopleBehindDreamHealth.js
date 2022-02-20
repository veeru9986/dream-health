import React from "react";
import styled from "styled-components";
import people1 from "../../images/people1.png";
import people2 from "../../images/people2.png";
import people3 from "../../images/people1.png";
import people4 from "../../images/people1.png";

const Container = styled.div`
  grid-area: auto/2/auto/3;
  margin-top: var(--mt1);
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

    @media (max-width: 767px){
        width: 100%;
    }
  }
  .people-behind-dream-health {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px){
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

          h4{
              text-transform: capitalize;
              font-size: var(--h4);
              font-weight:  var(--mediumWeight);
          }
          span{
              font-size:  var(--p2);
              font-weight: var(--xmediumWeight);
          }
        }
      }
    }
  }
`;

const people = [
  {
    name: "name username",
    designation: "designation",
    img: people1,
  },
  {
    name: "name username",
    designation: "designation",
    img: people2,
  },
  {
    name: "name username",
    designation: "designation",
    img: people3,
  },
  {
    name: "name username",
    designation: "designation",
    img: people4,
  },
  {
    name: "name username",
    designation: "designation",
    img: people1,
  },
  {
    name: "name username",
    designation: "designation",
    img: people2,
  },
  {
    name: "name username",
    designation: "designation",
    img: people3,
  },
  {
    name: "name username",
    designation: "designation",
    img: people4,
  },
];

function PeopleBehindDreamHealth() {
  return (
    <Container>
      <div className="heading">
        <h2>
          The People <br /> Behind Dream Health
        </h2>
      </div>
      <div className="para">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lorem
          consectetur placerat nec. Id id bibendum etiam mauris eget.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet
        </p>
      </div>
      <div className="people-behind-dream-health">
        {people.map((p) => {
          return (
            <div className="avatar-img-section">
              <div className="image">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="avatar-text-section">
                <div className="avatar-text">
                  <h4>{p.name}</h4>
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
