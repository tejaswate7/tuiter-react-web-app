
const WhoToFollowListItem = ( who ) => {
    return(`
                        <div class="row">
                            <div class="col-2 col-lg-3 col-xl-2">
                                <img src=${who.avatarIcon} class="w-100 h-100 rounded-circle">
                            </div>
                            <div class="col-6 col-lg-5 col-xl-6">
                                <div class="row text-black">
                                    <div class="col fw-bold">
                                        ${who.userName}
                                        <span>
                                            <i class="fas fa-check-circle"></i>
                                        </span>
                                    </div>
                                    <div class="row">
                                        <span class="text-secondary">
                                            @${who.handle}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 col-lg-4 col-xl-4">
                                <button class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Follow
                                </button>
                            </div>
                        </div>
    `);
}

export default WhoToFollowListItem;