import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
                <div class="">
                    <div class="row">
                        <div class="col-11 position-relative">
                            <input placeholder="Search Tuiter" type="search"  class="form-control rounded-pill wd-search-box" />
                            <i class="wd-icon position-absolute bottom-0">&#x1F50D;</i>
                        </div>
                        <div class="col-1">
                            <i class="fa fa-cog w-100 h-100 text-primary fa-2x"></i>
                        </div>
                    </div>
                    <ul class="nav nav-tabs mt-1 mb-1">
                        <li class="nav-item">
                            <a class="nav-link active" href="for-you.html">For You</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="sports.html" tabindex="-1">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                    <div class="position-relative">
                        <img class="w-100 mt-1" src="../../labs/a4/spaceship.jpeg"/>
                        <h1 class="position-absolute bottom-0 left-0 text-white ms-1">SpaceX's Starship</h1>
                    </div>
                    <!-- image with overlaid text -->
                    ${PostSummaryList()}
                </div>    
    `);
}
export default ExploreComponent;
