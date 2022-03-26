import React from "react";

export default ({ isSignedIn }) => {
  return (
    <>
      <div>Dashboard App</div>
      <div>{isSignedIn ? "Logged In" : "Not Logged In"}</div>
    </>
  );
};
