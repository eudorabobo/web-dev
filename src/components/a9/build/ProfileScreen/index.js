import React, {useEffect} from "react";
import NavigationSidebar from "../NavigationSidebar/";
import "./ProfileScreen.css"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PostList from "../PostList/PostList";
import {fetchAllProfiles} from "../../services/profileService";
const selectProfile = (state) => state.profile;
const ProfileScreen = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  useEffect(() => fetchAllProfiles(dispatch), []);
  // console.log(profile);
  // let editProfile = false;
  const editProfileClickHandler = () => {
    // console.log('edit profile clicked', profile);
    // editProfile = true;
  }
  return (
      <>
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active="profile"/>
          </div>
          <div className="col-10">
            <div className="row mt-2">
              <h3>{profile.firstName} {profile.lastName}</h3>
            </div>
            <div className="row mt-2">
              <img src={profile.bannerPicture} alt="" className="profile-banner"/>
            </div>
            <div className="row mt-2">
              <img src={profile.profilePicture} alt="" className="profile-avatar"/>
            </div>
            <div className="row mt-2">
              <div className="profile-firstname-lastname">
                {profile.firstName} {profile.lastName}
                <Link id="edit-profile" to="/a9/twitter/edit-profile"><button onClick={editProfileClickHandler} className="btn rounded-pill profile-edit-button">Edit Profile</button></Link>
              </div>

            </div>
            <div className="profile-handle">@{profile.handle}</div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-2"></div>
          <div className="col-10">
            <PostList/>
          </div>
        </div>


      </>
  )
};
export default ProfileScreen;