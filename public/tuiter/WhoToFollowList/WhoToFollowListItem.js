
const WhoToFollowListItem = ( who ) => {
    return(`
                        <div class="row">
                            <div class="col-3 col-lg-3 col-xl-3">
                                <img src=${who.avatarIcon} class="w-100 h-100 rounded-circle">
                            </div>
                            <div class="col-3 col-lg-5 col-xl-5">
                                <div class="row">
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