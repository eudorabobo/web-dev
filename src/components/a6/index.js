import React from "react";
import {Route, useLocation} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

const A6 = () => {
  return(
    <div>
      <Route path="/a6/twitter">
        <Build/>
      </Route>
      <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
        <Practice/>
      </Route>
    </div>
  )
}

export default A6;