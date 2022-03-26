import React from "react";
import { Dashboard } from "dashboard/DashboardApp";

export default ({ isSignedIn }) => {
  return <Dashboard isSignedIn={isSignedIn} />;
};
