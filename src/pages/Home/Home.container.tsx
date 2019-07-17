import React, { useEffect } from "react";
import { History } from "history";
import { useDispatch } from "react-redux";
import HomePage from "./Home.page";

import { setPageInfo } from "../../_core/redux/actions/page.action";

interface Props {
  history: History;
}

const HomePageContainer = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setPageInfo({
        title: "My Home Page - Application With React, Hooks, Redux and Typescript",
        location: props.history.location
      })
    );
  }, [dispatch, props.history]);

  return <HomePage {...props} />;
};

export default HomePageContainer;
