const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     
     ${active === 'home' ? `<a href="../HomeScreen/index.html" class="list-group-item list-group-item-action active">` :
        `<a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">`}
        <div class="row">
            <div class="col-1">
                <i class="fa fa-home"></i>
            </div>
            <div class="col-4 d-none d-xl-block d-xxl-block">
                Home
            </div>
        </div>
     </a>
     
     ${active === 'explore' ? `<a href="../explore/index.html" class="list-group-item list-group-item-action active">` :
        `<a href="../explore/index.html" class="list-group-item list-group-item-action">`}
        <div class="row">
            <div class="col-1">
                <i class="fas fa-hashtag"></i>
            </div>
            <div class="col-4 d-none d-xl-block d-xxl-block">
                Explore
            </div>
        </div>
    </a>

    <a href="notification.html" class="list-group-item">
        <div class="row">
            <div class="col-1">
                <i class="fas fa-bell"></i>
            </div>
            <div class="col-4 d-none d-xl-block d-xxl-block">
                Notifications
            </div>
        </div>
    </a>

    <a href="messages.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-1">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="col-4 d-none d-xl-block d-xxl-block">
                Messages
            </div>
        </div>
    </a>

    <a href="bookmarks.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-1">
                <i class="fas fa-bookmark"></i>
            </div>
            <div class="col-4 d-none d-xl-block d-xxl-block">
                Bookmarks
            </div>
        </div>
    </a>

    <a href="lists.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-1">
                <i class="fas fa-list"></i>
            </div>
            <div class="col-4 d-none d-xl-block d-xxl-block">
                Lists
            </div>
        </div>
    </a>

    <a href="profile.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-1">
                <i class="fas fa-user"></i>
            </div>
            <div class="col-4 d-none d-xl-block d-xxl-block">
                Profile
            </div>
        </div>
    </a>

    <a href="more.html" class="list-group-item  list-group-item-action">
        <div class="row">
            <div class="col-1">
                <i class="fas fa-comment-dots"></i>
            </div>
            <div class="col-4 d-none d-xl-block d-xxl-block">
                More
            </div>
        </div>
    </a>
    
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;