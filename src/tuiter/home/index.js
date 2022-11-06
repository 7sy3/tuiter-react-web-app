import React from "react";
import "./index.css";
import WhatsHappening from "./whats-happening";
import TuitsList from "../TuitsList";

const HomeComponent = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    );
};
export default HomeComponent;