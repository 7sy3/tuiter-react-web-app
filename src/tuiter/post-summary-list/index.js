import React, { useEffect } from "react";
import PostSummaryItem from "./post-summary-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";
const PostSummaryList = () => {
    const dispatch = useDispatch();
    const { tuits } = useSelector((state) => state.tuitsData);
    useEffect(() => {
        dispatch(findTuitsThunk());
    }, [dispatch]);
    return (
        <ul className="list-group">
            {
                tuits.map(post =>
                    <PostSummaryItem
                        key={post._id}
                        post={post}
                    />
                )
            }
        </ul>
    );
};

export default PostSummaryList;