import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateProfile} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";
import './index.css';

const EditProfileComponent = () => {
    const profile = useSelector((state) => state.profile)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [bio, setBio] = useState(profile.bio)
    const [location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.website)
    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth)
    const dispatch = useDispatch();
    const saveProfileHandler = () => {
        const newProfile = {
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        }
        console.log(newProfile)
        dispatch(updateProfile(newProfile))
    }
    
    const updateFirstName = (fn) => {
        setFirstName(fn);
    }
    
    const updateLastName = (ln) => {
        setLastName(ln);
    }

    const updateBio = (pb) => {
        setBio(pb);
    }

    const updateLocation = (lc) => {
        setLocation(lc);
    }

    const updateWebsite = (web) => {
        setWebsite(web);
    }

    const updateDateOfBirth = (db) => {
        setDateOfBirth(db);
    }

    return (
        <>
            <div className="row">
                <div className="col-1">
                    <Link to="/tuiter/profile"><i className="fa fa-times"/></Link>
                </div>
                <div className="col-9">Edit profile</div>
                <div className="col-2 float-end">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-outline-dark" onClick={saveProfileHandler}>Save</button>
                    </Link>
                </div>
            </div>

            <div className="wd-image">
                <img className="wd-banner-pic w-100" alt="" src={profile.bannerPicture} height={200}/>
                <h1> </h1>
                <img className="wd-profile-pic-2 rounded-circle" alt="" src={profile.profilePicture} width={100}
                     height={100}/>
            </div>

            <br></br>
            <br></br>
            <form>
                <div class="form-group">
                    <label for="fn">FirstName</label>
                    <input id="fn" class="form-control" placeholder={profile.firstName} onChange={(event) => updateFirstName(event.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="ln">LastName</label>
                    <input id="ln" type="text" class="form-control" placeholder={profile.lastName} onChange={(event) =>  updateLastName(event.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="bio">Bio</label>
                    <input id="bio" type="text" class="form-control" placeholder={profile.bio} onChange={(event) => updateBio(event.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="loc">Location</label>
                    <input id="loc" type="text" class="form-control" placeholder={profile.location} onChange={(event) => updateLocation(event.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="website">Website</label>
                    <input id="website" type="text" class="form-control" placeholder={profile.website} onChange={(event) => updateWebsite(event.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="date">Date Of Birth</label>
                    <input id="date" type="text" class="form-control" placeholder={profile.dateOfBirth} onChange={(event) => updateDateOfBirth(event.target.value)}/>
                </div>
            </form>
        </>
    );
};
export default EditProfileComponent;