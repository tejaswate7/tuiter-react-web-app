import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faUpload, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks"

const TuitStats = (
    {
        tuit
    }) => {
    const dispatch = useDispatch();

    return(
        <div className="row">
            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><i className="bi bi-chat"></i> <span className="number">{tuit.replies}</span></a></div>
            <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="number">{tuit.retuits}</span></a></div>
            { !tuit.liked && <div className="col-2"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
                liked: true
            }))} icon={faHeart} /> <span className="number">{tuit.likes}</span></a></div> }
            { tuit.liked && <div className="col-2"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes - 1,
                liked: false
            }))} style={{"color": "red"}} icon={faHeart} /> <span className="number">{tuit.likes}</span></a></div>}

            { !tuit.disliked && <div className="col-2"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1,
                disliked: true
            }))} icon={faThumbsDown} /> <span className="number">{tuit.dislikes}</span></a></div> }
            { tuit.disliked && <div className="col-2"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes - 1,
                disliked: false
            }))} style={{"color": "red"}} icon={faThumbsDown} /> <span className="number">{tuit.dislikes}</span></a></div>}
            <div className="col-2"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faUpload} /> <span className="number"></span></a></div>
        </div>
    );
}

export default TuitStats;