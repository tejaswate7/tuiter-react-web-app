import NavigationSidebar from "./index.js";

function exploreComponent() {
    $('#explore-s').append(`
       ${NavigationSidebar()}
   `);
}

$(exploreComponent);