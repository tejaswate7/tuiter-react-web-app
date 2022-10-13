const NavigationSidebar = () => {
    return(`
            <div class="">
                <ul class="list-group">
                    <li class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </li>
                    <li class="list-group-item active">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Home</span>
                    </li>
                    <li class="list-group-item">
                        <i class="fa fa-hashtag" aria-hidden="true"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Explore</span>
                    </li>
                    <li class="list-group-item">
                        <i class="fa fa-bell"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Notifications</span>
                    </li>
                    <li class="list-group-item">
                        <i class="fa fa-envelope"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Messages</span>
                    </li>
                    <li class="list-group-item">
                        <i class="fa fa-bookmark"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Bookmarks</span>
                    </li>
                    <li class="list-group-item">
                        <i class="fa fa-list"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Lists</span>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-user"></i>
                        <span class="d-none d-lg-inline-block d-xl-inline-block">Profile</span>
                    </li>
                    <li class="list-group-item">
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