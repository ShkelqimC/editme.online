import { useLocation } from "react-router-dom";
import React from "react";

export function Edit(props, { imgUrl }) {
  let { state } = useLocation();

  debugger;
  console.log(state, "state");
  console.log(props, "props");
  console.log(state.data.url, "state.data.url");
  return (
    <>
      {state.data?.url && <img src={state.data.url} className="image" />}

      <h1>Testing</h1>
    </>
  );
}
