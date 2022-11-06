import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './index.css';
const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        <>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="col-11">
                    <div><strong>Chloe Huang</strong></div>
                    <div className="text-secondary">6,114 Tweets</div>
                </div>
            </div>
            <div class="wd-image">
                <img className="wd-banner-pic w-100" alt="" src={profile.bannerPicture} height={200}/>
                <h1> </h1>
                <img className="wd-profile-pic rounded-circle" alt="" src={profile.profilePicture} width={100} height={100}/>
                <Link to="/tuiter/edit-profile">
                    <button className="float-end btn btn-outline-dark">
                        Edit profile
                    </button>
                </Link>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <h3><strong>{profile.firstName} {profile.lastName}</strong></h3>
            <div className="text-secondary">{profile.handle}</div>
            <h1> </h1>
            <div>{profile.bio}</div>
            <h1> </h1>
            <div className="row">
                <div className="col-4">
                    <i className="fas fa-water"></i>
                    <span className="text-secondary">{profile.location}</span>
                </div>
                <div className="col-4">
                    <i className="fas fa-burn"></i>
                    <span className="text-secondary">Born {profile.dateOfBirth}</span>
                </div>
                <div className="col-4">
                    <i className="fas fa-calendar-alt"></i>
                    <span className="text-secondary">Joined {profile.dateJoined}</span>
                </div>
            </div>
            <h2> </h2>
            <div className="row">
                <div className="col-4">
                    {profile.followingCount} <span className="text-secondary">Following</span>
                </div>
                <div className="col-4">
                    {profile.followersCount} <span className="text-secondary">Followers</span>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;