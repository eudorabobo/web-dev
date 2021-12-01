import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
const Practice = () => {
  return (
      <>
        <h1>Practice</h1>
        <ReduxExamples/>
        <Link to="/a8/twitter/home">
          Build
        </Link>
        <APIExamples/>
      </>

  )
};
export default Practice;