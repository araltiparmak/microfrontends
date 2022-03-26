import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dashboard-dev-root");
  if (devRoot) {
    ReactDOM.render(<App history={history} isSignedIn={false} />, devRoot);
  }
}

export const Dashboard = ({ history, isSignedIn }) => {
  return <App history={history} isSignedIn={isSignedIn} />;
};
