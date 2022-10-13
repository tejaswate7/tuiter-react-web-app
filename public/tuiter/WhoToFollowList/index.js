import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
                <ul class="list-group">
                    <li class="list-group-item fw-bold">
                        Who to follow
                    </li>
                    <li class="list-group-item ">
                                 ${
                                    who.map(wh => {
                                      return(WhoToFollowListItem(wh));
                                    }).join('')
                                  }
                    </li>
                </ul>
`); }

export default WhoToFollowList;