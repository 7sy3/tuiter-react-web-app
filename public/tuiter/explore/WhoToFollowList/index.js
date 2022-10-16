import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            ${
                who.map(item => {
                    return(WhoToFollowListItem(item.avatarIcon, item.userName, item.handle));
                }).join('')
            }
        </ul>
 `);
}
export default WhoToFollowList;