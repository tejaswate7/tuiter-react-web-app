import postsArray from './Post-Item/posts.json'
import PostItem from "./Post-Item/index.js";

const Home = () => {
    return (
        <div className="list-group">
            {
                postsArray.map(item => <PostItem key={item.user}  post={item}/>)
            }
        </div>
    )
}

export default Home;