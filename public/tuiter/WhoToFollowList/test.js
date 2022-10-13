import WhoToFollowList from "./index.js";

function exploreComponent() {
    $('#explore-s').append(`
       ${WhoToFollowList()}
   `);
}

$(exploreComponent);