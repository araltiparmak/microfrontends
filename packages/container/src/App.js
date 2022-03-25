import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Switch>
          <Route path="/auth">
            <AuthApp onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path="/" component={MarketingApp} />
        </Switch>
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
