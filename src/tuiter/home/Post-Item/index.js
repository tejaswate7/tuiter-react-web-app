import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faUpload, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const PostItem = (
{
    post
}) => {
        let hasContent = true;
        let hasTitle = true;
        let titleClass = "pt-2 pb-1";
        let contentClass = "pb-2";

if (post.title === "") {
    hasTitle = false;
    titleClass = "";
}
if (post.content === "") {
    hasContent = false;
    contentClass = "";
}

return(
    <div className="row wd-border-color-grey pt-2">
        <div className="col-1">
            <img src={post.userPhoto} height="40px" width="40px" className="rounded-circle"/>
        </div>
        <div className="col-11">
            <b className="text-black">{post.user} </b> <span className="text-muted" style={{"fontSize": "14px"}}> <FontAwesomeIcon style={{"color": "dodgerblue"}} icon={faCircleCheck} /> {post.handle} · {post.time}</span>
            <p dangerouslySetInnerHTML={{__html: post.tweet}}></p>
            <div className="row rounded wd-border-color-grey me-2">
                <img className="wd-border-bottom-grey p-0" src={post.image} width="100%" height="264px"/>

                <span className={`text-black ${titleClass}`}><b>{post.title}</b></span>
                <span  className={`text-black ${contentClass}`}>{post.content}</span>
            </div>
            <div className="row pt-2 pb-2">

                <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><i className="bi bi-chat"></i> <span className="number">{post.comments}</span></a></div>
                <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="number">{post.retweets}</span></a></div>
                <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faHeart} /> <span className="number">{post.likes}</span></a></div>
                <div className="col-3"><a className="wd-grey" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faUpload} /> <span className="number"></span></a></div>

            </div>
        </div>
    </div>
);

}

export default PostItem;