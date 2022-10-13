import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item">
                     ${
                        posts.map(pos => {
                               return(PostSummaryItem(pos));
                              }).join('')
                        }
            </li>
        </ul>    
    `);

}

export default PostSummaryList;