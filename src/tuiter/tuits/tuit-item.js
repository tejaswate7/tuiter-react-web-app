import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faHeart, faRetweet, faUpload} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk  } from "../../services/tuits-thunks"
const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
            <div className="col-2">
                <img className="rounded-circle" height={48} src={`/images/${post.image}`}/>
            </div>
            <div className="col-10  pt-2">
                <div className="col-12">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div>
                        <div>{post.userName} . <span className="text-muted" style={{"fontSize": "14px"}}> <FontAwesomeIcon style={{"color": "dodgerblue"}} icon={faCircleCheck} /> {post.handle} · {post.time}</span>
                        </div>
                    </div>
                    <div>{post.tuit}</div>
                    <div className="row pt-2 pb-2">
                        <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><i className="bi bi-chat"></i> <span className="number">{post.replies}</span></a></div>
                        <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="number">{post.retweets}</span></a></div>
                        <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faHeart} /> <span className="number">{post.likes}</span></a></div>
                        <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faUpload} /> <span className="number"></span></a></div>

                    </div>
                </div>
            </div>
            </div>
        </li>
    );
};
export default TuitItem;