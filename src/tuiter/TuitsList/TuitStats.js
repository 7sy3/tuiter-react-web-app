import React from "react";
import {useDispatch} from "react-redux";

import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <i className="text-dark fa fa-comment"></i>
                    <span className="text-dark">{tuit.replies}</span>
                </div>

                <div className="col-2">
                    <i className="text-dark fas fa-random"></i>
                    <span className="text-dark">{tuit.retuits}</span>
                </div>

                <div className="col-3">
                    <i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))}></i>
                    {tuit.likes}
                    {/*<i className="text-red fa fa-heart wd-icon-like"></i>*/}
                    {/*<span className="text-dark">{tuit.likes}</span>*/}
                </div>

                <div className="col-4">
                    <i className="fa fa-thumbs-down me-2" onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            dislikes: tuit.dislikes - 1
                        }))}></i>
                    {tuit.dislikes}
                    {/*<span className="text-dark">{tuit.dislikes}</span>*/}
                </div>

                <div className="col-1">
                    <i className="text-dark fa fa-upload"></i>
                </div>
            </div>
        </>
    )
}
export default TuitStats;