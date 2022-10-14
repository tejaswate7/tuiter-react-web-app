const PostSummaryItem = ( post ) => {
    return(`
                        <div class="row">
                            <div class="col-10">
                                <div class="row text-secondary ps-2">
                                        ${post.topic}
                                </div>
                                <div class="row">
                                    <div class="col pe-0 ps-2 mw-70 fw-bold">
                                        ${post.userName}
                                        <span>
                                            <i class="fas fa-check-circle"></i> <span class="text-secondary">- ${post.time}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="row fw-bold ps-2">
                                ${post.title}
                                </div>
                            </div>
                            <div class="col-2">
                                <img src=${post.image} class="w-100">
                            </div>
                        </div>
    `);
}

export default PostSummaryItem;