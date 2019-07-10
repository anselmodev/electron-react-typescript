import React, { Fragment } from "react";

import  ExamplePageContainer from '../../pages/Example/Example.container';

interface Props {
  complementComponents?: object;
  children?: any;
  history?: object;
}

const RenderSection: React.FC = (props: Props) => {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  );
};
const routeList: any[] = [
  {
    id: 'examplePage',
    path: "/example-page",
    exact: false,
    component: ExamplePageContainer,
  }
];

export { RenderSection, routeList };
