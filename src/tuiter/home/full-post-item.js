import React from "react";
import "./index.css";
const FullPostItem = (
    {
        post = {
            "avatar": "elon.jpg",
            "author": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "description": "Amazing show about @Inspiration4x mission!",
            "image": "home-1.jpeg",
            "imageTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "imageContent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "comments": "4.2k",
            "forward": "3.5k",
            "likes": "37.5k"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" src={`/images/${post.avatar}`} width={48} height={48}/>
                </div>

                <div className="col-11">
                    <span><strong>{post.author}</strong></span>
                    <i className="fas fa-check-circle"></i>
                    <span className="text-dark">{post.handle}</span>
                    <span className="text-dark"> · </span>
                    <span className="text-dark">{post.time}</span>
                    <div>{post.description}</div>

                    <div className="border border-dark rounded">
                        <img className="border-bottom col-12" src={`/images/${post.image}`} width={504} height={264}/>
                            <div>{post.imageTitle}</div>
                            <div className="text-dark">{post.imageContent}</div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <i className="text-dark fa fa-comment"></i>
                            <span className="text-dark">{post.comments}</span>
                        </div>

                        <div className="col-3">
                            <i className="text-dark fas fa-random"></i>
                            <span className="text-dark">{post.forward}</span>
                        </div>

                        <div className="col-3">
                            <i className="text-red fa fa-heart wd-icon-like"></i>
                            <span className="text-dark">{post.likes}</span>
                        </div>

                        <div className="col-3">
                            <i className="text-dark fa fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default FullPostItem;