import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                Tuiter
            </Link>
            {/*<a className="list-group-item">Tuiter</a>*/}
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${(active === 'explore' || active === '') ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-hashtag"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        Explore
                    </div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-flask"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        Labs
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        Notifications
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        Messages
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-bookmark"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        Bookmarks
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-list"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        Lists
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        Profile
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-1">
                        <i className="fas fa-comment-dots"></i>
                    </div>
                    <div className="col-4 d-none d-xl-block d-xxl-block">
                        More
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;