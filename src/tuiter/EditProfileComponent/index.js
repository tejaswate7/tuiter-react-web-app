import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import { updateProfile } from '../ProfileComponent/profile-reducer'

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
                            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold float-end"
                                onClick={updateProfileHandler}>Save</button>
                            <div className="position-relative float-end">
                                <img src={"/images/" + profile.profilePicture} width={600}/>
                                <div className="position-absolute top-50 img-circle">
                                    <img className="rounded-circle" src='/images/react-logo.jpeg' width={100}
                                         height={100}/>
                                </div>
                            </div>
                            <div className="float-none">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="name" placeholder="Name" value={name}
                                           onChange={(event) => setName(event.target.value)}/>
                                </div>
                            </div>

                            <label htmlFor="bio" className="col-sm-2 col-form-label">Bio</label>
                            <textarea id="bio" className="form-control" placeholder="Bio" value={bio} rows="4" cols="50"
                                      onChange={(event) => setBio(event.target.value)}></textarea>
                            <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="location" value={location}
                                       placeholder="Location" onChange={(event) => setLocation(event.target.value)}/>
                            </div>
                            <label htmlFor="website" className="col-sm-2 col-form-label">Website</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="website" value={website}
                                       placeholder="Website" onChange={(event) => setWebsite(event.target.value)}/>
                            </div>
                            <label htmlFor="birthdate" className="col-sm-2 col-form-label">Birth Date</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="birthdate"  value={birthdate}
                                        onChange={(event) => setBirthdate(event.target.value)}/>
                            </div>
                    </div>
                )
                }
                </div>
                );
            }
export default EditProfileComponent;