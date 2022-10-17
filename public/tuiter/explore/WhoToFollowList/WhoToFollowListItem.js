const WhoToFollowListItem = (avatarIcon, userName, handle) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="wd-rounded-image" src=${avatarIcon} width="48px" height="48px">
                </div>
                <div class="col">
                    <span class="font-weight-bold">${userName}</span>
                    <i class="fas fa-check-circle"></i>
                    <div>${handle}</div>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-primary rounded-pill text-white">Follow</button>
                </div>
            </div>
        </li>
 `);
}
export default WhoToFollowListItem;