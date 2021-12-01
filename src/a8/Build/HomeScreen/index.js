import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList/PostList.js";
import {Link} from "react-router-dom";
import "./home.css"
import WhatsHappening from "../WhatsHappening";
const HomeScreen = () => {
  return (
      <>
        <div className="row mt-2 mb-5">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active="home"/>
          </div>
          <div className="col-6 ">
            <div className="row mt-2">
              <div className="col-10">
                <div className="wd-input-group">
                    <span className="wd-icon-inside">
                      <i className="fa fa-search wd-icon-color-lightgray"
                         aria-hidden="true"></i>
                    </span>
                    <input type="text" placeholder="Search Twitter"
                         className="mb-2 wd-input-field"/>
                </div>
              </div>

              <div className="col-2"><Link to="#"><i
                  className="fa fa-cog fa-2x"></i></Link></div>
            </div>
          <div className="row mt-2">
              <WhatsHappening/>
          </div>
            <PostList/>
          </div>
          <div
              className="col-4 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <PostSummaryList title="What's happening"/>
          </div>
        </div>
      </>
  )
};
export default HomeScreen;