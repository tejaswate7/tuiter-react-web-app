import PostSummaryList from "./index.js";

function exploreComponent() {
    $('#explore-s').append(`
       ${PostSummaryList()}
   `);
}

$(exploreComponent);