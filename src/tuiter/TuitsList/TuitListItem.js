import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./TuitStats";
const TuitListItem = (
    {
        tuit = {
            "_id": 123,
            "userName": "SpaceX",
            "time": "2h",
            "avatar": "space.png",
            "liked": true,
            "handle": "@spacex",
            "tuits": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacegaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars",
            "replies": 10,
            "retuits": 432,
            "likes": 234,
            "dislikes": 45
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" alt="" src={`/images/nasa.png`} width={48} height={48}/>
                </div>

                <div className="col-10">
                    <span><strong>{tuit.userName}</strong></span>
                    <i className="fas fa-check-circle"></i>
                    <span className="text-dark">{tuit.handle}</span>
                    <span className="text-dark"> · </span>
                    <span className="text-dark">{tuit.time}</span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div>{tuit.tuit}</div>

                    <div className="row mt-3 mb-2">
                        <TuitStats key={tuit._id} tuit={tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitListItem;


