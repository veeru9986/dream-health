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
      background-color: #c4c4c4;
      margin-right: 1rem;
    }
  }
`;
export default function AccordionT(props) {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AccordionContainer primary={props.marginTop}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordion-title-wrapper">
            <div className="icon" />
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</h4>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            condimentum mollis sit mattis viverra ullamcorper tellus. Elementum
            at ipsum et euismod mattis pellentesque pellentesque sed. Fermentum
            tristique lectus nisl amet. Dolor, auctor non blandit accumsan
            faucibus. Pulvinar fermentum, scelerisque nisl ut dui pulvinar
            pulvinar. Accumsan neque habitasse vel vitae euismod odio amet at
            nibh. Duis non varius diam id arcu blandit porttitor habitant nulla.
            Feugiat leo, commodo placerat turpis. Vulputate senectus tortor
            parturient ullamcorper egestas. Interdum vitae gravida sit pharetra
            eu eu at in. Malesuada vel eu pretium fermentum. Pellentesque lectus
            urna tellus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="accordion-title-wrapper">
            <div className="icon" />
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</h4>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            condimentum mollis sit mattis viverra ullamcorper tellus. Elementum
            at ipsum et euismod mattis pellentesque pellentesque sed. Fermentum
            tristique lectus nisl amet. Dolor, auctor non blandit accumsan
            faucibus. Pulvinar fermentum, scelerisque nisl ut dui pulvinar
            pulvinar. Accumsan neque habitasse vel vitae euismod odio amet at
            nibh. Duis non varius diam id arcu blandit porttitor habitant nulla.
            Feugiat leo, commodo placerat turpis. Vulputate senectus tortor
            parturient ullamcorper egestas. Interdum vitae gravida sit pharetra
            eu eu at in. Malesuada vel eu pretium fermentum. Pellentesque lectus
            urna tellus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}
