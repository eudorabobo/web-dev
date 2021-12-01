import React from "react";
import {Link} from "react-router-dom";
import "../ExploreScreen/explore.css"
const NavigationSidebar = (
    {
      active = 'explore'
    }) => {
  return (
      <>
        <div className="list-group">
          <Link to="/a9/"><i className="fab fa-twitter fa-2x"></i></Link>
          <Link to="/a9/twitter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}><i
              className="fa fa-home"></i> Home</Link>
          <Link to="/a9/twitter/explore"
                className={`list-group-item ${active === 'explore' ? 'active' : ''}`}><i
              className="fa fa-hashtag"></i> Explore</Link>
          <Link id="notificaton" to="#" className="list-group-item"><i
              className="fa fa-bell"></i> Notifications</Link>
          <Link id="messages" to="#" className="list-group-item"><i
              className="fa fa-envelope"></i> Messages</Link>
          <Link id="bookmarks" to="#" className="list-group-item"><i
              className="fa fa-bookmark"></i> Bookmarks</Link>
          <Link id="lists" to="#" className="list-group-item"><i
              className="fa fa-list"></i> Lists</Link>
          <Link id="profile" to="/a9/twitter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}><i
              className="fa fa-user"></i> Profile</Link>


          <Link to="#" className="list-group-item">
            <div className="fa-stack wd-nv-icon"><i
                className="fa fa-circle fa-stack-1x wd-nv-icon"></i><i
                className="fa fa-ellipsis-h fa-inverse fa-stack-1x wd-nv-icon"></i>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More
          </Link>
          <button
              className="btn btn-primary rounded-pill w-100 mt-2">Tweet
          </button>
        </div>
      </>

  )

}
export default NavigationSidebar;