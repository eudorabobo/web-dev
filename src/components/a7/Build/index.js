import React from "react"
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import {combineReducers, createStore} from "redux";
import who from "../../../reducers/who";
import {Provider} from "react-redux";
import tweets from "../../../reducers/tweets";
import ProfileScreen from "./ProfileScreen";
import profile from "../../../reducers/profile"
import EditProfile from "./ProfileScreen/EditProfile";
const reducer = combineReducers({posts: tweets, who, profile})
const store = createStore(reducer);
const Build = () => {
  return (
      <Provider store={store}>
        <div>
          <Route path={["/", "/a7/twitter/home"]}
                 exact={true} component={HomeScreen}/>
          <Route path={"/a7/twitter/profile"}
                 exact={true} component={ProfileScreen}/>
          <Route path={"/a7/twitter/edit-profile"}
                 exact={true} component={EditProfile}/>
          <Route path={"/a7/twitter/explore"}
                 exact={true} component={ExploreScreen}/>
        </div>
      </Provider>

  )
};
export default Build;