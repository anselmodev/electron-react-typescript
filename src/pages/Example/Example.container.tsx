import React, { useEffect, useState } from "react";
import { History } from "history";
import { useDispatch } from "react-redux";
import ExamplePage from "./Example.page";

import { setPageInfo } from "../../_core/redux/actions/page.action";

interface Props {
  history: History;
}

const ExamplePageContainer = (props: Props) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const counterHandler = (type?: string) => {
    if (type === "add") {
      setCounter(oldState => oldState + 1);
    } else {
      setCounter(oldState => oldState - 1);
    }
  };
  const pageRouterAction= (path: string) => {
    props.history.push(path);
  };

  useEffect(() => {
    dispatch(
      setPageInfo({
        title: "My Example Page Counter - Application With React, Hooks, Redux and Typescript",
        location: props.history.location
      })
    );
  }, [dispatch, props.history]);

  return <ExamplePage pageRouterAction={pageRouterAction} counter={counter} counterHandler={counterHandler}/>;
};

export default ExamplePageContainer;
