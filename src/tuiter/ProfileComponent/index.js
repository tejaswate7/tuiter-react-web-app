import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
    const profileArray = useSelector(state => state.profile)
    return(
        <div className="container">
            <h4>Profile</h4>
            {
                profileArray.map(profile =>
                    <div>
                        <h2>{profile.firstName} {profile.lastName}</h2>
                        <div className="position-relative float-end">
                            <img src={"/images/" + profile.profilePicture} width={600}/>
                            <div className="position-absolute top-50 img-circle">
                                <img className="rounded-circle" src='/images/react-logo.jpeg' width={100} height={100}/>
                            </div>
                        </div>
                        <Link to={`${process.env.PUBLIC_URL}/tuiter/edit-profile`}>
                            <button className="btn btn-outline-primary float-end">Edit Profile</button>
                        </Link>
                        <h2>{profile.firstName} {profile.lastName}</h2>
                        <div className="text-secondary">{profile.handle}</div>
                        <div>{profile.bio}</div>
                        <div className="row">
                            <div className="col-2">{profile.location}</div>
                            <div className="col-3">Born: {profile.dateOfBirth}</div>
                            <div className="col-3">Joined: {profile.dateJoined}</div>
                        </div>
                        <div className="row">
                            <div className="col-3"><b>{profile.followingCount}</b> Following</div>
                            <div className="col-3"><b>{profile.followersCount}</b> Followers</div>
                        </div>

                    </div>)
            }
        </div>
    );
};
export default ProfileComponent;