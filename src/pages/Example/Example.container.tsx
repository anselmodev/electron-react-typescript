import React, { useEffect } from "react";
import { History } from 'history';
// import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from "react-redux";
import ExamplePage from "./Example.page";

import  { setPageInfo } from '../../_core/redux/actions/page.action';

interface Props {
  history: History
}

const ExamplePageContainer = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageInfo({
      title: 'My Example APP With React, Hooks, Redux and Typescript',
      location: props.history.location
    }));
  }, [dispatch, props.history]);


  return <ExamplePage {...props} />;
};

export default ExamplePageContainer;
