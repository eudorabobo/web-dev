import React from "react";
import PostSummaryList from "../PostSummaryList/";
import {Link} from "react-router-dom";
const ExploreComponent = () => {
  return (
      <>
        <div className="row mt-2">
          <div className="col-10">
            <div className="wd-input-group">
          <span className="wd-icon-inside">
            <i className="fa fa-search wd-icon-color-lightgray"
               aria-hidden="true"/>
          </span>
              <input type="text" placeholder="Search Twitter"
                     className="mb-2 wd-input-field"/>
            </div>
          </div>

          <div className="col-2"><Link to="#"><i
              className="fa fa-cog fa-2x"/></Link></div>
        </div>
        <ul className="nav nav-tabs mt-2">
          <li className="nav nav-item">
            <Link to={"#"} className="nav-link ">For you</Link>
          </li>
          <li className="nav nav-item">
            <Link to="#" className="nav-link">Trending</Link>
          </li>
          <li className="nav nav-item">
            <Link to="#" className="nav-link">News</Link>
          </li>
          <li className="nav nav-item">
            <Link to="#" className="nav-link">Sports</Link>
          </li>
          <li className="nav nav-item">
            <Link to="#" className="nav-link">Entertainment</Link>
          </li>
        </ul>
        <div className="list-group">
          <div className="list-group-item">
            <img src="../../images/starship.jpeg" alt="..."
                 className="wd-full-width-height"/>
            <h5 className="card-title">SpaceX's StarShip</h5>
          </div>
          <PostSummaryList/>
        </div>
      </>
  )
};
export default ExploreComponent;