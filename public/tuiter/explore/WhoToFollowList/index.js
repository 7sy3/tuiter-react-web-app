import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item text-bold wd-font-weight"><strong>Who to follow</strong></li>
            ${
                who.map(item => {
                    return(WhoToFollowListItem(item.avatarIcon, item.userName, item.handle));
                }).join('')
            }
        </ul>
 `);
}
export default WhoToFollowList;