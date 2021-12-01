import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import {Link} from "react-router-dom";
import {fetchAllProfiles, saveProfile} from "../../../../services/profileService";
const selectProfile = (state) => state.profile;
const EditProfile = () => {
    const initProfile = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => fetchAllProfiles(dispatch), []);
    const [profile, setProfile] = useState(initProfile);
    const saveProfileHandler = () => {
        console.log('save profile clicked, current profile is: ', profile)
        // const action = {type: 'save-profile', profile: profileEdited};
        // dispatch(action);
        saveProfile(dispatch, profile)
    };
    const formChangeHandler = (event) => {
        const value = event.target.value;
        // console.log([event.target.name], value);
        setProfile({
            ...profile,
            [event.target.name]: value
        });
    }
    return (
        <>
            <div className="row mt-2 mb-5">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-10">
                    <div className="row mt-2">
                        <div className="col-5">
                            <Link to="/a8/twitter/profile"><i
                                className="fas fa-times fa-2x fa-pull-left edit-profile-margin-right"></i></Link>
                            <h4>Edit Profile</h4>
                        </div>
                        <div className="col-6">

                        </div>
                        <div className="col-1">
                            <button onClick={saveProfileHandler} className="btn rounded-pill edit-profile-save-button">Save</button>
                        </div>
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
                        </div>

                    </div>
                    <div className="profile-handle">@{profile.handle}</div>
                    <div className="row mb-5">
                        <ul className="list-group">
                            <li className="list-group-item">
                                First Name
                                <br/>
                                <input name="firstName" onChange={formChangeHandler} value={profile.firstName} className="form-control edit-profile-form"/>
                            </li>
                            <li className="list-group-item">
                                Last Name
                                <br/>
                                <input name="lastName" onChange={formChangeHandler} value={profile.lastName} className="form-control edit-profile-form"/>
                            </li>
                            <li className="list-group-item">
                                Bio
                                <br/>
                                <input name="bio" onChange={formChangeHandler} value={profile.bio} className="form-control edit-profile-form"/>
                            </li>
                            <li className="list-group-item">
                                Location
                                <br/>
                                <input name="location" onChange={formChangeHandler} value={profile.location} className="form-control edit-profile-form"/>
                            </li>
                            <li className="list-group-item">
                                Website
                                <br/>
                                <input name="website" onChange={formChangeHandler} value={profile.website} className="form-control edit-profile-form"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditProfile;