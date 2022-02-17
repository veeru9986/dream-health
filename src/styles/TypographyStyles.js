import { createGlobalStyle } from "styled-components";

const TypographyStyles = createGlobalStyle`

 h1{
     font-size: var(--h1);
     font-weight: var(--heavyWeight);
     margin: 0;
     padding: 0;
 }
 h2{
     font-size: var(--h2);
     font-weight: var(--mediumWeight);
     margin: 0;
     padding: 0;
 }
 h3{
     font-size: var(--h3);
     font-weight: var(--mediumWeight);
     margin: 0;
     padding: 0;
 }
 h4{
     font-size: var(--h4);
     font-weight: var(--xmediumWeight);
     margin: 0;
     padding: 0;
 }

 p{
     font-size: var(--p1);
     font-weight: var(--lightWeight)
 }




  
`;
export default TypographyStyles;
