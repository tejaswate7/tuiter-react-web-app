import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../explore/ExploreComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function homeComponent() {
    $('#home-s').append(`
        <div class="container wd-flex-container pt-2">
<div class="row container-global">
    <div class="col-xxl-3 col-xl-2 col-lg-1 col-md-2 col-sm-2">
        ${NavigationSidebar("home")}
    </div>
    <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-10 col-sm-10 wd-border-se-color-grey">
        ${PostList()}
    </div>
    <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block">
        <div class="wd-sidebar">
                ${PostSummaryList()}
        </div>
    </div>
    
</div>
</div>
    `);
}

$(homeComponent);