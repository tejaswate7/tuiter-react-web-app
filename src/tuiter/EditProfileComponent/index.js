import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import React, {useState} from "react";
import { updateProfile } from '../ProfileComponent/profile-reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


const EditProfileComponent = () => {
    const profileArray = useSelector(state => state.profile)
    const [name, setName] = useState(profileArray[0].firstName + " " + profileArray[0].lastName)
    const [bio, setBio] = useState(profileArray[0].bio)
    const [location, setLocation] = useState(profileArray[0].location)
    const [website, setWebsite] = useState(profileArray[0].website)
    const d = profileArray[0].dateOfBirth.split("/")
    const ev = d[2] + "-" + d[1] + "-" + d[0]
    const [birthdate, setBirthdate] = useState(ev)

    const dispatch = useDispatch();
    const updateProfileHandler = () => {
        const newProfile = {
            prof: {
                name,
                bio,
                location,
                website,
                birthdate
            }
        }

        dispatch(updateProfile(newProfile));
    }

    return (
        <div className="container">
            {
                profileArray.map(profile =>
                    <div>
                        <div className="row">
                            <div className="col-1 align-items-center p-3 ps-4">
                                <Link to="/tuiter/profile"><FontAwesomeIcon icon={faTimes} /></Link>
                            </div>
                            <div className="col-11">
                                <span className="p-3 fw-bolder">Edit Profile</span>
                                <Link to="/tuiter/profile"><button className="btn btn-primary rounded-pill float-end m-2 fw-bold" onClick={updateProfileHandler}>Save</button></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-5">
                                <img src={"/images/" + profile.profilePicture} width="100%" height="100%"/>
                                <img src={"/images/react-logo.jpeg"} height="100px" width="100px" className="rounded-circle wd-bottom-left-profile-edit bg-white ms-2"/>
                            </div>
                        </div>
                        <div className="border border-1 border-solid p-2 m-2">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name" placeholder="Name" value={name}
                                       onChange={(event) => setName(event.target.value)}/>
                            </div>
                        </div>
                        <div className="border border-1 border-solid p-2 m-2">
                            <label htmlFor="bio" className="col-sm-2 col-form-label">Bio</label>
                            <textarea id="bio" className="form-control" placeholder="Bio" value={bio} rows="4" cols="50"
                                      onChange={(event) => setBio(event.target.value)}></textarea>
                        </div>
                        <div className="border border-1 border-solid p-2 m-2">
                            <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="location" value={location}
                                       placeholder="Location" onChange={(event) => setLocation(event.target.value)}/>
                            </div>
                        </div>
                        <div className="border border-1 border-solid p-2 m-2">
                            <label htmlFor="website" className="col-sm-2 col-form-label">Website</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="website" value={website}
                                       placeholder="Website" onChange={(event) => setWebsite(event.target.value)}/>
                            </div>
                        </div>
                        <div className="border border-1 border-solid p-2 m-2">
                            <label htmlFor="birthdate" className="col-sm-2 col-form-label text-muted">Birth Date</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="birthdate"  value={birthdate}
                                       onChange={(event) => setBirthdate(event.target.value)}/>
                            </div>
                        </div>

                    </div>
                )
                }
                </div>
                );
            }
export default EditProfileComponent;