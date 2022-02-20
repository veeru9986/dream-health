import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --family: "proxima-nova" !important;
    --heavyWeight: 800;
    --xheavyWeight: 700;
    --mediumWeight: 600;
    --xmediumWeight: 500;
    --lightWeight: 400;
    --xlightWeight: 300;
    --transMed: 0.3s;
    --transSlow: 0.5s;
    --lightBlue: #8CD1FF;
    --medBlue: #0071BC;
    --darkBlue: #005187;
    --lightPink: #EB9B9E;
    --lightRed : #C1272D;
    --darkRed: #7A191C;
    --lineHeight: 112%;
    --black : #060708;
    --h1: 3.75rem;
    --h2: 2.625rem;
    --h3: 1.75rem;
    --h4: 1.375rem;
    --p1: 1.375rem;
    --p2: 1.125rem;
    --p3: 1rem;
    --p4: 0.875rem;
    --mt: 2rem;
    --gap: 2rem;
    --mt1: 5rem;


    @media (max-width: 991px) {
      --h1: 3rem;
      --h2: 2.125rem;
      --h3: 1.50rem;
      --h4: 1.125rem;
      --p1: 1rem;
      --p2: 0.875rem;
      --p3: 0.75rem;
      --p4: 0.7rem;
      --mt: 1.7rem;
      --gap: 2rem;
      --mt1: 3.5rem;
      --signh2: 1.75rem;


    }
    @media (max-width: 479px) {
      --h1: 1.875rem;
      --h2: 1.5rem;
      --h3: 1.25rem;
      --h4: 1.0625rem;
      --p1: 1rem;
      --p2: 0.875rem;
      --p3: 0.75rem;
      --p4: 0.7rem;
      --mt: 1rem;
      --gap: 2rem;
      --mt1: 2.5rem;

    }
  }
* {
    box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}
body {
  font-family: "proxima-nova";
   margin: 0;
   padding: 0;
}
/* ::-webkit-scrollbar{
  width: 8px;
}
::-webkit-scrollbar-track{
  background: #f1f1f1;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb{
  background: #002f54;
  border-radius: 50px;
} */
  
`;
export default GlobalStyles;
