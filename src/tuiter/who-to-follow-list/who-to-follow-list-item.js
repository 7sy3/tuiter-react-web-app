import React from "react";
const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
    }
) => {
    return(
        // <li className="list-group-item">
        //     <div className="row">
        //         <div className="col-2">
        //             <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
        //         </div>
        //
        //         <div className="col-8">
        //             <div className="fw-bold">{who.userName}</div>
        //             <div>@{who.handle}</div>
        //         </div>
        //
        //         <div className="col-2">
        //             <button className="btn btn-primary rounded-pill float-end">Follow</button>
        //         </div>
        //     </div>
        // </li>
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="wd-rounded-image" alt="" src={`/images/${who.avatarIcon}`} width={48} height={48}/>
                </div>
                <div className="col-8">
                    <span className="font-weight-bold">{who.userName}</span>
                    <i className="fas fa-check-circle"></i>
                    <div>{who.handle}</div>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;