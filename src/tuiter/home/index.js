import React from "react";
import "./index.css";
import FullPostItem from "./full-post-item";
import itemArray from "./home.json";

const HomeComponent = () => {
    return(
        <ul className="list-group">

            {
                itemArray.map(item =>
                    <FullPostItem
                        key={item._id}
                        post={item}/>
                )
            }

        </ul>

    );
};
export default HomeComponent;