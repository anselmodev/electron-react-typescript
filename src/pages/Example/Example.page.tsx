import React from "react";
import { Button, Icon } from "rsuite";
import ADLogo from "../../assets/images/ad-studio.png";

import { DisplayExamplePage } from "./Example.styles";

interface Props {
  counter: number;
  pageRouterAction: Function;
  counterHandler: Function;
}

const ExamplePage = (props: Props) => {

  return (
    <DisplayExamplePage>
      <h1>My Example Page</h1>
      <p>
        <img src={ADLogo} alt="" title="AD Studio" width="300" />
        <br />
        <small>( My multi-platform app )</small>
      </p>

      <p>
        <span>
          Counter Hooks Example: <b>[ {props.counter} ]</b>
        </span>{" "}
        <br />
      </p>

      <p>
        <span>
          <Button appearance="primary" onClick={() => props.counterHandler()}>
            <Icon icon="minus-circle" />
          </Button>
        </span>
        <span>
          <Button appearance="primary" onClick={() => props.counterHandler("add")}>
            <Icon icon="plus-circle" />
          </Button>
        </span>
      </p>

      <p>
        <Button appearance="ghost" onClick={() => props.pageRouterAction("/home")}>
          Router Dom ( back to Home )
        </Button>
      </p>
    </DisplayExamplePage>
  );
};

export default ExamplePage;
