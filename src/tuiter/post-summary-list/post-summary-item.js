import React from "react";
const PostSummaryItem = ({post}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">
                        {post.topic}
                    </div>
                    <div className="fw-bolder">
                        {post.username}
                        <i className="fas fa-check-circle"></i>
                        <span className="text-secondary">- {post.time}</span>
                    </div>
                    <div className="fw-bolder">
                        {post.tuit}
                    </div>
                </div>
                <div className="col-2">
                    <img
                        width={70}
                        className="float-end"
                        src={`/images/java.png`}></img>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;