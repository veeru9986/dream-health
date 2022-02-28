import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "../assets/arrow.svg";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.primary ? props.primary : 0)};
  border-top: 2px solid #c4c4c45e;

  .MuiPaper-root {
    box-shadow: none;
    padding: 1rem 0;
    margin: 0 !important;
    border-bottom: 2px solid #c4c4c45e;

    &:before {
      background-color: transparent;
    }
  }
  .MuiAccordionSummary-content {
    width: 70%;
    flex-grow: unset;

    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .MuiAccordionSummary-root {
    justify-content: flex-start;
  }
  .MuiAccordionDetails-root {
    margin-left: 66px;

    @media (max-width: 991px) {
      margin-left: 0;
    }
  }

  p {
    font-size: var(--p1);
    color: var(--black);
  }
  .accordion-title-wrapper {
    display: flex;
    align-items: center;

    h4 {
      font-size: var(--p1);
      font-weight: var(--mediumWeight);
      color: var(--black);
    }
    .icon {
      width: 50px;
      height: 50px;
      margin-right: 1rem;
      background-size: cover;
      background-position: center;
    }
  }
`;
export default function AccordionT({ marginTop, accordion }) {
  const firstTitle = accordion[0].title;
  const [expanded, setExpanded] = React.useState(`${firstTitle}`);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AccordionContainer primary={marginTop}>
      {accordion.map((a, id) => {
        return (
          <Accordion
            expanded={expanded}
            onChange={handleChange(`${a.title}`)}
            key={id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="accordion-title-wrapper">
                <div
                  className="icon"
                  style={{
                    backgroundImage: `url(${a.icon.data.attributes.url})`,
                  }}
                />
                <h4>{a.title}</h4>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{a.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </AccordionContainer>
  );
}
