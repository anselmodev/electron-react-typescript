import React from "react";
import { Button } from "rsuite";
import ADLogo from "../../assets/images/ad-studio.png";
import { DisplayHomePage } from "./Home.styles";

const HomePage = (props: any) => {
  const { history } = props;

  return (
    <DisplayHomePage className="scroll-style">
      <h1>My Home Page</h1>
      <p>
        <img src={ADLogo} alt="" title="AD Studio" width="300" />
        <br />
        <small>( My multi-platform app )</small>
      </p>

      <p>
        <Button appearance="ghost" onClick={() => history.push("example-page")}>
          Router Dom ( go to Example Page )
        </Button>
      </p>
    </DisplayHomePage>
  );
};

export default HomePage;
