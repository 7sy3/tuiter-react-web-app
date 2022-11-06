import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "tuits": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacegaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                {/*<div className="col-8">*/}
                {/*    <div>{post.userName} · {post.time}</div>*/}
                {/*    <div className="fw-bolder">{post.topic}</div>*/}
                {/*    <div>{post.title}</div>*/}
                {/*</div>*/}
                {/*<div className="col-4">*/}
                {/*    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>*/}
                {/*</div>*/}
                <div className="col-12">
                    <div className="text-secondary">
                        {post.topic}
                    </div>
                    <div className="fw-bolder">
                        {post.userName}
                        <i className="fas fa-check-circle"></i>
                        <span className="text-secondary">- {post.time}</span>
                    </div>
                    <div className="fw-bolder">
                        {post.tuits}
                    </div>
                </div>
                {/*<div className="col-4">*/}
                {/*    <img className="float-end" alt="" src={`/images/${post.image}`} height={100}/>*/}
                {/*</div>*/}
            </div>
        </li>
    );
};
export default PostSummaryItem;