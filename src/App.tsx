import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { store } from './_core/redux/store';
import { routeList, RenderSection } from "./_core/routes";

import "./assets/css/global-styles.css";

const App: React.FC = () => {
  return (
    <HashRouter basename="/" hashType="noslash">
      <Provider store={store}>
      <HashRouter basename="/" hashType="noslash">
        <div className="root-container">
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {routeList.map(Page => {
            return (
              <Route
                key={Page.id}
                path={Page.path}
                exact={Page.exact}
                render={props => (
                  <RenderSection {...props}>
                    <Page.component {...props} />
                  </RenderSection>
                )}
              />
            );
          })}
        </div>
      </HashRouter>
      </Provider>
    </HashRouter>
  );
};

export default App;
