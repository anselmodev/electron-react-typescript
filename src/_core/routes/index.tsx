import React, { Fragment } from "react";

import  HomePageContainer from '../../pages/Home/Home.container';
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
    id: 'homePage',
    path: "/home",
    exact: false,
    component: HomePageContainer,
  },
  {
    id: 'examplePage',
    path: "/example-page",
    exact: false,
    component: ExamplePageContainer,
  }
];

export { RenderSection, routeList };
