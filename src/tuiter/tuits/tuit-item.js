import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faHeart, faRetweet, faUpload} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuitThunk } from "../../services/tuits-thunks"
const TuitItem = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        console.log("deleteTuit Handler called", id)
        dispatch(deleteTuitThunk(id));
    }

    return(
        // <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10  pt-2">
                    <div className="col-12">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <div>
                            <div>{tuit.userName} . <span className="text-muted" style={{"fontSize": "14px"}}> <FontAwesomeIcon style={{"color": "dodgerblue"}} icon={faCircleCheck} /> {tuit.handle} · {tuit.time}</span>
                            </div>
                        </div>
                        <div>{tuit.tuit}</div>
                        <div className="row pt-2 pb-2">
                            <TuitStats tuit={tuit} />
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default TuitItem;