const NavigationSidebar = ( active ) => {

    let a = active;
    let homeClass = "";
    let exploreClass = "";
    let notificationsClass = "";
    let messagesClass = "";
    let bookmarksClass = "";
    let listsClass = "";
    let profileClass = "";
    let moreClass = "";

    if(a === "home") {
        homeClass = "active";
    }
    else if(a === "explore") {
        exploreClass = "active";
    }
    else if(a === "notifications") {
        notificationsClass = "active";
    }
    else if(a === "messages") {
        messagesClass = "active";
    }
    else if(a === "bookmarks") {
        bookmarksClass = "active";
    }
    else if(a === "lists") {
        listsClass = "active";
    }
    else if(a === "profile") {
        profileClass = "active";
    }
    else if(a === "more") {
        moreClass = "active";
    }


    return(`
            <div class="">
                <ul class="list-group">
                    <li class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <a href="../HomeScreen/index.html">
                        <li class="list-group-item ${homeClass}">
                            <i class="fa fa-home" aria-hidden="true" ></i>
                            <span class="d-none d-lg-inline-block d-xl-inline-block">Home</span>
                        </li>
                    </a>
                    <a href="../explore/index.html">
                    <li href="../explore/index.html" class="list-group-item ${exploreClass}">
                        <i class="fa fa-hashtag" aria-hidden="true"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Explore</span>
                    </li>
                    </a>
                    <li class="list-group-item ${notificationsClass}">
                        <i class="fa fa-bell"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Notifications</span>
                    </li>
                    <li class="list-group-item ${messagesClass}">
                        <i class="fa fa-envelope"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Messages</span>
                    </li>
                    <a href="../bookmarks/index.html">
                    <li class="list-group-item ${bookmarksClass}">
                        <i class="fa fa-bookmark"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Bookmarks</span>
                    </li>
                    </a>
                    <li class="list-group-item ${listsClass}">
                        <i class="fa fa-list"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Lists</span>
                    </li>
                    <li class="list-group-item ${profileClass}">
                        <i class="fas fa-user"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Profile</span>
                    </li>
                    <li class="list-group-item ${moreClass}">
                        <i class="fa fa-minus-circle"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">More</span>
                    </li>
                </ul>
                <button class="btn btn-primary w-100 mt-1 rounded-pill">
                    Tuit
                </button>
            </div>
 `);
}
export default NavigationSidebar;