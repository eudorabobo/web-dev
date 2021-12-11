import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

const A8 = () => {
  return(
    <div>
      <Route path={["/a8", "/a8/practice"]} exact={true}>
        <Practice/>
      </Route>
      <Route path="/a8/twitter">
        <Build/>
      </Route>
    </div>
  )
}

export default A8;