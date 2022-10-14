const PostItem = (post) => {
    let hasContent = true;
    let hasTitle = true;
    let titleClass = "pt-2 pb-1";
    let contentClass = "pb-2";

    if (post.title === "") {
        hasTitle = false;
        titleClass = "";
    }
    if (post.content === "") {
        hasContent = false;
        contentClass = "";
    }


    return(`
        <div class="row wd-border-bottom-grey pt-2">
            <div class="col-1">
                <img src=${post.userPhoto} height="40px" width="40px" class="rounded-circle">
            </div>
            <div class="col-11">
             <b class="text-white">${post.user} </b> <span class="text-muted" style="font-size: 14px"> <span class="fa-stack fa-1x" style="font-size: 6px">
                                    <i class="fas fa-solid fa-stack-2x fa-circle" style="color: white"></i>
                            <i class="fas fa-solid fa-stack-1x fa-check" style="color: black"></i></span> ${post.handle} · ${post.time}</span>
            <p>${post.tweet}</p>
            <div class="row rounded wd-border-color-grey me-2">
            <img class="wd-image wd-border-bottom-grey p-0" src=${post.image} width="100%" height="264px">
<!--            <br>-->
            <span class="text-white ${titleClass}">${post.title}</span>
            <span class="${contentClass}">${post.content}</span>
            </div>
            <div class="row pt-2 pb-2">
            
            <div class="col-3"><a class="wd-grey" style="text-decoration: none" href="#"><i class="fa fa-comment"></i> <span class="number">${post.comments}</span></a></div>
            <div class="col-3"><a class="wd-grey" style="text-decoration: none" href="#"><i class="fa fa-retweet"></i> <span class="number">${post.retweets}</span></a></div>
            <div class="col-3"><a class="wd-grey" style="text-decoration: none" href="#"><i class="fa fa-heart"></i> <span class="number">${post.likes}</span></a></div>
            <div class="col-3"><a class="wd-grey" style="text-decoration: none" href="#"><i class="fa fa-upload"></i> <span class="number"></span></a></div>
            </div>
            </div>
        </div>
    `);
}

export default PostItem;