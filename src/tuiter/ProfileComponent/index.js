import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const ProfileComponent = () => {
    const profileArray = useSelector(state => state.profile)
    return(
        <div className="container">
            {
                profileArray.map(profile =>
                    <div>
                        <div className="row">
                            <div className="col-1 align-items-center p-3 ps-4">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                            <div className="col-11">
                                <span className="fw-bolder">{profile.firstName} {profile.lastName}</span><br/>
                                <span className="text-muted" style={{"fontSize": "14px"}}>6114 Tuits</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <img src={"/images/" + profile.profilePicture} width="100%" height="100%"/>
                                <img src={"/images/react-logo.jpeg"} height="100px" width="100px" className="rounded-circle wd-bottom-left-profile bg-white ms-2"/>
                                <Link to={`${process.env.PUBLIC_URL}/tuiter/edit-profile`}>
                                    <button className="btn btn-outline-primary m-2 float-end">Edit Profile</button>
                                </Link>
                            </div>
                        </div>
                        {/*<div className="position-relative float-end">*/}
                        {/*    <img src={"/images/" + profile.profilePicture} width={600}/>*/}
                        {/*    <div className="position-absolute top-50 img-circle">*/}
                        {/*        <img className="rounded-circle" src='/images/react-logo.jpeg' width={100} height={100}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <h2 className="mt-4">{profile.firstName} {profile.lastName}</h2>
                        <div className="text-secondary">{profile.handle}</div>
                        <div className="mb-3">{profile.bio}</div>
                        <div className="row mb-3">
                            <div className="col-2">{profile.location}</div>
                            <div className="col-3">Born: {profile.dateOfBirth}</div>
                            <div className="col-3">Joined: {profile.dateJoined}</div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-3"><b>{profile.followingCount}</b> Following</div>
                            <div className="col-3"><b>{profile.followersCount}</b> Followers</div>
                        </div>

                    </div>)
            }
        </div>
    );
};
export default ProfileComponent;