import posts from "./posts.js";
import PostItem from "./PostItem.js";


const PostListComponent = () => {
    return(`
       <div class="list-group">
            ${posts.map(item => PostItem(item)).join('')}
       </div>`);

}
export default PostListComponent;