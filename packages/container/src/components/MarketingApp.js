import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default () => {
  useEffect(() => {
    mount(ref.current);
  });
  const ref = useRef(null);
  return <div ref={ref} />;
};
