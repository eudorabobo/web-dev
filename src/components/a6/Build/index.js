import React from "react";
import {Link, Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";

const Build = () => {
  return (
      <>
        <h1>Build</h1>
        <Route path={["/a6/twitter/home","/a6/twitter"]} exact={true} component={HomeScreen}/>
        <Route path={["/a6/twitter/explore"]} component={ExploreScreen}/>
        <div className="row d-flex">
          <Link to="/a6/hello">
            Hello
          </Link>
          <Link to="/a6/practice">
            Practice
          </Link>
        </div>
      </>
  )
}

export default Build;

