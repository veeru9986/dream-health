import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Wrapper } from "../../../components/StyledComponents/Wrapper";
import styled from "styled-components";
import { navigate } from "gatsby";
import { saveToken, saveUser } from "../../../../utils/cart";

const Wrapper1 = styled(Wrapper)`
  place-items: center;
  height: 100vh;
  justify-content: center;

  .container{
    grid-area: auto/1/auto/3;
    width: 80%;
    h2{
      text-align: center;
    }
  }
`;

function ConnectPage(props) {
  const [text, setText] = React.useState("Loading...");

  React.useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(
      `${process.env.STRAPI_API_URL}/api/auth/${props.params["*"]}/${props.location.search}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        saveToken(res.jwt)
        saveUser(res.user)
        setText(
          "You have been successfully logged in. You will be redirected in a few seconds..."
        );
        setTimeout(() => navigate("/"), 3000); // Redirect to homepage after 3 sec
      })
      .catch((err) => {
        console.log(err);
        setText("An error occurred, please see the developer console.");
      });
  }, [props.params]);
  return (
    <Wrapper1>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </Wrapper1>
  );
}

export default ConnectPage;
