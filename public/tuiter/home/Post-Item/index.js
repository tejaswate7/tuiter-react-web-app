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

);

}

export default PostItem;